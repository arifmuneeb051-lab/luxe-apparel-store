// In-memory serverless cache with seeded records
let cachedOrders = [
  {
    orderNumber: 'LX-2026-9041',
    date: 'September 12, 2026',
    userId: 'usr-demo-02',
    customerName: 'Victoria Sterling',
    email: 'v.sterling@mayfair.co.uk',
    phone: '+44 20 7946 0912',
    shippingAddress: '14 Berkeley Square, Mayfair, London, W1J 5AW, United Kingdom',
    items: [
      {
        id: 'luxe-01',
        title: 'Double-Faced Cashmere Overcoat',
        selectedSize: 'M',
        selectedColor: 'Camel Tan',
        quantity: 1,
        price: 890
      }
    ],
    total: 890,
    paymentMethod: 'STRIPE',
    paymentStatus: 'Paid via Stripe',
    status: 'In Transit',
    verificationStatus: 'Verified by Admin',
    verifiedBy: 'arifmuneeb81@gmail.com',
    verifiedAt: 'September 12, 2026, 11:30 AM',
    adminNotifiedEmail: 'arifmuneeb81@gmail.com',
    tracking: {
      courier: 'Luxe Atelier White-Glove Logistics',
      trackingNumber: 'TRK-LX-9041-GB',
      estimatedDelivery: 'September 16, 2026',
      currentLocation: 'London Central Logistics Hub',
      timeline: [
        { status: 'Order Placed', time: 'Sep 12, 09:14 AM', completed: true, note: 'Order received in atelier system.' },
        { status: 'Admin Verified & Confirmed', time: 'Sep 12, 11:30 AM', completed: true, note: 'Verified by management (arifmuneeb81@gmail.com).' },
        { status: 'Atelier Tailoring & Quality Check', time: 'Sep 13, 02:45 PM', completed: true, note: 'Hand-steamed and encased in garment box.' },
        { status: 'Dispatched via White-Glove Courier', time: 'Sep 14, 08:00 AM', completed: true, note: 'Departed Florence atelier to London hub.' },
        { status: 'Out for Handover Delivery', time: 'Pending', completed: false, note: 'Scheduled for signature handover.' },
        { status: 'Delivered to Residence', time: 'Pending', completed: false, note: 'White-glove private reception.' }
      ]
    }
  },
  {
    orderNumber: 'LX-2026-8819',
    date: 'September 14, 2026',
    userId: 'usr-demo-01',
    customerName: 'Alexander Vance',
    email: 'avance@nycatelier.com',
    phone: '+1 (555) 019-2834',
    shippingAddress: '432 Park Avenue, Penthouse 72, New York, 10022, United States',
    items: [
      {
        id: 'luxe-02',
        title: 'Structured Italian Wool Tuxedo Blazer',
        selectedSize: '42R',
        selectedColor: 'Midnight Black',
        quantity: 1,
        price: 750
      },
      {
        id: 'luxe-06',
        title: 'Monogram Calfskin Atelier Briefcase',
        selectedSize: 'One Size',
        selectedColor: 'Espresso Brown',
        quantity: 1,
        price: 940
      }
    ],
    total: 1690,
    paymentMethod: 'CASH ON DELIVERY (COD)',
    paymentStatus: 'Pending Handover',
    status: 'Pending Admin Verification',
    verificationStatus: 'Awaiting Admin Review',
    verifiedBy: null,
    verifiedAt: null,
    adminNotifiedEmail: 'arifmuneeb81@gmail.com',
    tracking: {
      courier: 'Luxe Private Chauffeur Dispatch',
      trackingNumber: 'TRK-LX-8819-US',
      estimatedDelivery: 'September 18, 2026',
      currentLocation: 'New York Atelier Flagship',
      timeline: [
        { status: 'Order Placed', time: 'Sep 14, 03:20 PM', completed: true, note: 'Cash on Delivery request logged.' },
        { status: 'Admin Verified & Confirmed', time: 'Pending', completed: false, note: 'Admin arifmuneeb81@gmail.com confirmation pending.' },
        { status: 'Atelier Tailoring & Packaging', time: 'Pending', completed: false, note: 'Waiting for confirmation.' },
        { status: 'Dispatched via White-Glove Courier', time: 'Pending', completed: false, note: 'Awaiting dispatch.' },
        { status: 'Out for Handover Delivery', time: 'Pending', completed: false, note: 'Payment collected upon handover.' },
        { status: 'Delivered to Residence', time: 'Pending', completed: false, note: 'Order complete.' }
      ]
    }
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
    const { orderNumber, email } = req.query || {}
    let results = [...cachedOrders]

    if (orderNumber) {
      results = results.filter((o) => o.orderNumber.toLowerCase() === orderNumber.toLowerCase())
    }

    if (email) {
      results = results.filter((o) => o.email.toLowerCase() === email.toLowerCase())
    }

    return res.status(200).json({
      success: true,
      count: results.length,
      orders: results
    })
  }

  if (req.method === 'POST') {
    const body = req.body || {}
    const isCOD = (body.paymentMethod || '').toUpperCase().includes('COD') || (body.paymentMethod || '').toUpperCase().includes('CASH')

    const newOrder = {
      orderNumber: body.orderNumber || `LX-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: body.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      userId: body.userId || 'guest',
      customerName: body.customerName || 'Anonymous Client',
      email: body.email || '',
      phone: body.phone || '',
      shippingAddress: body.shippingAddress || '',
      items: body.items || [],
      total: body.total || 0,
      paymentMethod: body.paymentMethod || (isCOD ? 'CASH ON DELIVERY (COD)' : 'STRIPE'),
      paymentStatus: isCOD ? 'Pending Handover' : 'Paid via Stripe',
      status: isCOD ? 'Pending Admin Verification' : 'White-Glove Dispatched',
      verificationStatus: isCOD ? 'Awaiting Admin Review' : 'Verified by Admin',
      verifiedBy: isCOD ? null : 'arifmuneeb81@gmail.com',
      verifiedAt: isCOD ? null : new Date().toLocaleDateString(),
      adminNotifiedEmail: 'arifmuneeb81@gmail.com',
      tracking: body.tracking || {
        courier: isCOD ? 'Luxe Private Chauffeur Dispatch' : 'Luxe Atelier White-Glove Logistics',
        trackingNumber: `TRK-LX-${Math.floor(1000 + Math.random() * 9000)}-${isCOD ? 'COD' : 'ST'}`,
        estimatedDelivery: '3-5 Business Days',
        currentLocation: 'Atelier Central Logistics Hub',
        timeline: [
          { status: 'Order Placed', time: 'Today', completed: true, note: `${body.paymentMethod || 'Order'} logged in atelier system.` },
          { status: 'Admin Verified & Confirmed', time: isCOD ? 'Pending' : 'Confirmed', completed: !isCOD, note: 'Verification by management (arifmuneeb81@gmail.com).' },
          { status: 'Atelier Tailoring & Packaging', time: isCOD ? 'Pending' : 'In Progress', completed: !isCOD, note: 'Garment preparation in atelier.' },
          { status: 'Dispatched via White-Glove Courier', time: 'Scheduled', completed: false, note: 'Climate-controlled insured transit.' },
          { status: 'Out for Handover Delivery', time: 'Pending', completed: false, note: isCOD ? 'Payment collected upon handover.' : 'Signature handover.' },
          { status: 'Delivered to Residence', time: 'Pending', completed: false, note: 'White-glove private reception.' }
        ]
      }
    }

    cachedOrders.unshift(newOrder)

    return res.status(201).json({
      success: true,
      message: 'Order placed successfully and logged for admin arifmuneeb81@gmail.com',
      order: newOrder
    })
  }

  return res.status(405).json({ error: 'Method Not Allowed' })
}
