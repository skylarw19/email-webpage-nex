const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
)

export default async(req,res) =>{
    const today = new Date();

    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'li.q.wong@gmail.com',  // sender email needs to be validated Mailjet email account (not )
              Name: req.body.name,  // req.body.name is the sender name
            },
            To: [
              {
                Email: 'skylar.wong19@gmail.com',  //change to info@getnexus.us
                Name: 'info@getnexus.us', //change to info@getnexus.us
              },
            ],
            Subject: `Nexus Report a Problem ${today}`,
            TextPart: 
            `
            Customer Name: ${req.body.name}
            Customer Email: ${req.body.email}
            Customer Phone Number: ${req.body.phoneNumber}
            Message: ${req.body.message}
            
            ${today}`,

            // HTMLPart:
            // '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
            // TextPart: `Hello ${req.query.name} - should have showed name`,
            // HTMLPart:
            //   `<h3>Dear ${req.body.name}, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!`,
            //   '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
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
