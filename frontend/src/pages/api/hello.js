// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res.status(200).json({ 
    name: 'John Doe' ,
    api: process.env.API_URL
  })
}
