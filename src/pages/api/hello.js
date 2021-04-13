// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {

  const response = await fetch(`https://newsapi.org/v2/everything?q=cyber%20security&sortBy=popularity&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`)

  const data = await response.json()
  res.status(200).json(data)
}
