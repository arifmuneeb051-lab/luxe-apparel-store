import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    userId: { type: String, default: 'guest' },
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    shippingAddress: { type: String, required: true },
    items: [
      {
        id: String,
        title: String,
        selectedSize: String,
        selectedColor: String,
        quantity: Number,
        price: Number
      }
    ],
    total: { type: Number, required: true },
    paymentMethod: { type: String, default: 'STRIPE' },
    status: {
      type: String,
      enum: ['Processing', 'White-Glove Dispatched', 'Delivered', 'Cancelled'],
      default: 'Processing'
    }
  },
  { timestamps: true }
)

export default mongoose.models.Order || mongoose.model('Order', orderSchema)
