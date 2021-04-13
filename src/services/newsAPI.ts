
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
