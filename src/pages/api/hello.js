// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {

  const response = await fetch(`https://newsapi.org/v2/everything?q=cyber%20security&sortBy=popularity&pageSize=10&apiKey=e0e8226841c34783806528760fae44c7`)

  const data = await response.json()
  res.status(200).json(data)
}
