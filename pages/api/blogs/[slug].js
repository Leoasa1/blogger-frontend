const { blogs } = require ('./data.json')

export default (req, res) => {
    const blog = blogs.filter((blg) => blg.slug === req.query.slug)

    if (req.method === 'GET') {
        res.status(200).json(blog)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({message: `Method ${req.method} is not allowed`})
    }
}
