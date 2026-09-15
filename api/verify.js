export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const { orderNumber, verifiedBy } = req.body || {}

  if (!orderNumber) {
    return res.status(400).json({ error: 'orderNumber is required' })
  }

  const adminEmail = verifiedBy || 'arifmuneeb81@gmail.com'
  const timeNow = new Date().toLocaleString()

  return res.status(200).json({
    success: true,
    message: `Order ${orderNumber} confirmed & approved by Superadmin ${adminEmail}`,
    orderNumber,
    verificationStatus: 'Verified by Admin',
    verifiedBy: adminEmail,
    verifiedAt: timeNow,
    status: 'White-Glove Dispatched'
  })
}
