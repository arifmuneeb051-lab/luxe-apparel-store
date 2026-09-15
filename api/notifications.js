export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const notifications = [
    {
      id: 'notif-001',
      type: 'NEW_ORDER_ALERT',
      recipientEmail: 'arifmuneeb81@gmail.com',
      title: 'New High-Value Order Placed: #LX-2026-8819 ($1,690)',
      timestamp: new Date().toISOString(),
      customer: 'Alexander Vance (avance@nycatelier.com)',
      paymentMethod: 'CASH ON DELIVERY (COD)',
      itemsCount: 2,
      total: 1690,
      status: 'Awaiting Admin Verification',
      actionRequired: 'Verify client address and confirm order fulfillment.'
    },
    {
      id: 'notif-002',
      type: 'NEW_USER_REGISTRATION',
      recipientEmail: 'arifmuneeb81@gmail.com',
      title: 'New Maison Client Registered: Victoria Sterling',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      customer: 'Victoria Sterling (v.sterling@mayfair.co.uk)',
      location: 'London, United Kingdom',
      status: 'Active VIP Client'
    }
  ]

  return res.status(200).json({
    success: true,
    recipient: 'arifmuneeb81@gmail.com',
    count: notifications.length,
    notifications
  })
}
