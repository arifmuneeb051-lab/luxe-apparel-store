export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  return res.status(200).json({
    status: 'online',
    platform: 'LUXE APPAREL Haute Couture API',
    admin: 'arifmuneeb81@gmail.com',
    runtime: 'Vercel Serverless Production',
    timestamp: new Date().toISOString(),
    endpoints: [
      '/api/products',
      '/api/orders',
      '/api/users',
      '/api/verify',
      '/api/notifications',
      '/api/health'
    ]
  })
}
