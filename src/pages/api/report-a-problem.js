const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
)

export default async(req,res) =>{

    // const request = mailjet.post('send', { version: 'v3.1' }).request({
    // Messages: [
    //     {
    //         From: {
    //             Email: 'li.q.wong@gmail.com',//'$SENDER_EMAIL',
    //             Name: 'li.q.wong',
    //         },
    //         To: [
    //             {
    //             Email: 'skylar.wong19@gmail.com', // info@getnexus.us '$RECIPIENT_EMAIL',
    //             Name: 'skylar.wong', //info@getnexus.us
    //             },
    //         ],
    //         Subject: 'Report a Problem to Nexus',
    //         TextPart: '',  //when HTMLPart is used, TextPart is not needed
    //         HTMLPart:
    //             '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
    //     },
    // ],
    // })
    // request
    // .then(result => {
    //     console.log(result.body)
    // })
    // .catch(err => {
    //     console.log(err.statusCode)
    // })

    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'li.q.wong@gmail.com',
              Name: 'li.q.wong',
            },
            To: [
              {
                Email: 'skylar.wong19@gmail.com',
                Name: 'skylar.wong',
              },
            ],
            Subject: 'with POST and headers all fields filled',
            TextPart: `Name: ${req.body.name}, Email: ${req.body.email}, Num: ${req.body.phoneNumber}, Message: ${req.body.message}`,
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
