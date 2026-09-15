let cachedUsers = [
  {
    id: 'usr-demo-01',
    name: 'Muneeb Ahmad',
    email: 'arifmuneeb81@gmail.com',
    phone: '+92 300 1234567',
    address: 'Executive Suite 4B, Blue Area',
    city: 'Islamabad',
    postalCode: '44000',
    country: 'Pakistan',
    role: 'admin',
    createdAt: '2026-09-01'
  },
  {
    id: 'usr-demo-02',
    name: 'Victoria Sterling',
    email: 'v.sterling@mayfair.co.uk',
    phone: '+44 20 7946 0912',
    address: '14 Berkeley Square, Mayfair',
    city: 'London',
    postalCode: 'W1J 5AW',
    country: 'United Kingdom',
    role: 'client',
    createdAt: '2026-09-05'
  }
]

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      count: cachedUsers.length,
      users: cachedUsers
    })
  }

  if (req.method === 'POST') {
    const { name, email, password, phone, address, city, postalCode, country } = req.body || {}

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' })
    }

    const cleanEmail = email.trim().toLowerCase()
    const existing = cachedUsers.find((u) => u.email.toLowerCase() === cleanEmail)
    if (existing) {
      return res.status(409).json({ error: 'An account with this email already exists.' })
    }

    const newUser = {
      id: `usr-${Date.now()}`,
      name: name.trim(),
      email: cleanEmail,
      phone: phone || '',
      address: address || '',
      city: city || '',
      postalCode: postalCode || '',
      country: country || 'United States',
      role: 'client',
      createdAt: new Date().toISOString().split('T')[0]
    }

    cachedUsers.push(newUser)

    return res.status(201).json({
      success: true,
      message: `Client ${newUser.name} registered successfully in House of Luxe`,
      user: newUser
    })
  }

  return res.status(405).json({ error: 'Method Not Allowed' })
}
