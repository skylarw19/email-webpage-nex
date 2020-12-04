const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
)

// import '../../../config/mailjet'

// export default async (req,res) => {
//     const results = await fetch(`${process.env.apiurl}/${req.query.q}`)
//     const data = await results.json()  
//     const shows = data.showsWithServicePlans.map(el =>{
//             return{    
//                 id: el.id,
//                 seriesName: el.seriesName,
//                 overview: el.overview,
//                 image: el.image,
//                 network: el.network,
//                 servicePlans: el.servicePlans  
//             }
//     })

//     const searchItem = await SearchesMade.create({seriesName: req.query.q})
//     return res.json({shows})
// }

export default async(req,res) =>{

    const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
        {
        From: {
            Email: 'li.q.wong@gmail.com',//'$SENDER_EMAIL',
            Name: 'Li.q.wong',
        },
        To: [
            {
            Email: 'skylar.wong19@gmail.com', //'$RECIPIENT_EMAIL',
            Name: 'skylar.wong',
            },
        ],
        Subject: 'My 2nd Mailjet Email!',
        TextPart: 'Greetings from Mailjet!',
        HTMLPart:
            '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
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
