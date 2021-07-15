const { blogs } = require ('./data.json')

export default function(req, res) {
    if (req.method === 'GET'){
        res.status(200).json(blogs)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json('not allowed')
    }  
}