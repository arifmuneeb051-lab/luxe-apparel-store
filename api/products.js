import { products as initialProducts } from '../src/data/products.js'

// In-memory serverless cache
let liveProductsCatalog = [...initialProducts]

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // GET: Fetch products with filters
  if (req.method === 'GET') {
    const { category, gender, search, id } = req.query || {}

    if (id) {
      const item = liveProductsCatalog.find((p) => p.id === id)
      if (item) {
        return res.status(200).json({ success: true, data: item })
      }
      return res.status(404).json({ success: false, message: 'Product not found' })
    }

    let filtered = [...liveProductsCatalog]

    if (category && category !== 'All') {
      filtered = filtered.filter(
        (p) =>
          (p.category && p.category.toLowerCase() === category.toLowerCase()) ||
          (p.subCategory && p.subCategory.toLowerCase() === category.toLowerCase())
      )
    }

    if (gender && gender !== 'All') {
      filtered = filtered.filter(
        (p) => p.category && p.category.toLowerCase() === gender.toLowerCase()
      )
    }

    if (search) {
      const q = search.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          (p.title && p.title.toLowerCase().includes(q)) ||
          (p.subtitle && p.subtitle.toLowerCase().includes(q)) ||
          (p.category && p.category.toLowerCase().includes(q))
      )
    }

    return res.status(200).json({
      success: true,
      count: filtered.length,
      totalCatalog: liveProductsCatalog.length,
      data: filtered
    })
  }

  // PUT: Update an existing product (Real-Time CMS)
  if (req.method === 'PUT') {
    const body = req.body || {}
    const { id } = body

    if (!id) {
      return res.status(400).json({ success: false, message: 'Product ID is required for update' })
    }

    const index = liveProductsCatalog.findIndex((p) => p.id === id)
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Product not found in catalog' })
    }

    liveProductsCatalog[index] = {
      ...liveProductsCatalog[index],
      ...body,
      updatedAt: new Date().toISOString()
    }

    return res.status(200).json({
      success: true,
      message: `Product "${liveProductsCatalog[index].title}" updated successfully`,
      data: liveProductsCatalog[index]
    })
  }

  // POST: Add a new luxury piece to catalog
  if (req.method === 'POST') {
    const body = req.body || {}
    const { title, price } = body

    if (!title || price == null) {
      return res.status(400).json({ success: false, message: 'Title and price are required' })
    }

    const newProduct = {
      id: body.id || `luxe-${Date.now()}`,
      title: body.title,
      subtitle: body.subtitle || 'Bespoke Atelier Creation',
      category: body.category || 'Festive',
      subCategory: body.subCategory || 'Luxury Pret',
      price: Number(price),
      originalPrice: body.originalPrice ? Number(body.originalPrice) : null,
      badge: body.badge || 'NEW ARRIVAL',
      images: Array.isArray(body.images) && body.images.length > 0 ? body.images : [body.image || 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000'],
      sizes: body.sizes || ['Unstitched', 'S', 'M', 'L'],
      colors: body.colors || [{ name: 'Royal Gold', hex: '#D4AF37' }],
      rating: 5.0,
      reviewsCount: 1,
      description: body.description || 'Masterfully tailored Pakistani luxury couture with pure fabric.',
      fabric: body.fabric || '100% Pure Raw Silk & Chiffon',
      inStock: body.inStock != null ? Number(body.inStock) : 10,
      isSoldOut: body.isSoldOut || false,
      createdAt: new Date().toISOString()
    }

    liveProductsCatalog.unshift(newProduct)

    return res.status(201).json({
      success: true,
      message: 'Luxury garment added to catalog successfully',
      data: newProduct
    })
  }

  // DELETE: Remove product from catalog
  if (req.method === 'DELETE') {
    const { id } = req.query || req.body || {}
    if (!id) {
      return res.status(400).json({ success: false, message: 'Product ID required to delete' })
    }

    const initialLength = liveProductsCatalog.length
    liveProductsCatalog = liveProductsCatalog.filter((p) => p.id !== id)

    if (liveProductsCatalog.length === initialLength) {
      return res.status(404).json({ success: false, message: 'Product not found' })
    }

    return res.status(200).json({
      success: true,
      message: `Product ${id} removed from catalog successfully`,
      remainingCatalog: liveProductsCatalog.length
    })
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' })
}
