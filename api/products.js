import { products } from '../src/data/products.js'

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const { category, gender, search } = req.query || {}

  let filtered = [...products]

  if (category && category !== 'All') {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase() || p.subCategory.toLowerCase() === category.toLowerCase()
    )
  }

  if (gender && gender !== 'All') {
    filtered = filtered.filter((p) => p.category.toLowerCase() === gender.toLowerCase())
  }

  if (search) {
    const q = search.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    )
  }

  return res.status(200).json({
    success: true,
    count: filtered.length,
    totalCatalog: products.length,
    data: filtered
  })
}
