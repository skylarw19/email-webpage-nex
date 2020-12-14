// change process.env keys to Nexus Platform's Mailjet account
const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
)

export default async(req,res) =>{
    const today = new Date();
    const dateTime = `${today.toDateString()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'li.q.wong@gmail.com',  // sender email needs to be the validated Mailjet email account, therefore this should be info@getnexus.us once we connect Nexus Platform's Mailjet Account. (info@getnexus.us will send to info@getnexus.us, with customer email in the body)
              Name: req.body.name,  // sender name from form
            },
            To: [
              {
                Email: 'skylar.wong19@gmail.com',  //change to info@getnexus.us
                Name: 'info@getnexus.us', //change to info@getnexus.us
              }, 
              // add another object to send to mulitple users
              // {
              //   Email: 'info@getnexus.us',
              //   Name: 'info@getnexus.us',
              // }
            ],
            Subject: `[Nexus] Report a Problem: ${dateTime}`,
            TextPart: `Name: ${req.body.name} \nEmail: ${req.body.email} \nPhone Number: ${req.body.phoneNumber} \n\nMessage: ${req.body.message} \n\n${today}`,
        
            // Email can be formated with HTMLPart property
            // HTMLPart:
            //   `<h3>Dear ${req.body.name}, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!`,
          },
        ],
      })
      request
        .then(result => {
          console.log(result.body)
        })
        .catch(err => {
          console.log(err.statusCode)
        })

    
}
