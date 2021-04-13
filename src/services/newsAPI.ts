
export interface NewsResponse {
  status: string
  totalResults: string
  articles: []
}

export interface NewsItem {
  title: string
  description: string
  url: string
}

export const fetchNewsApi = async (): Promise<NewsResponse> => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=cyber%20security&sortBy=popularity&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`)
  return res.json()
}
