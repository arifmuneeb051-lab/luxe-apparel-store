import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    category: { type: String, required: true },
    subCategory: { type: String, default: '' },
    price: { type: Number, required: true },
    originalPrice: { type: Number, default: null },
    badge: { type: String, default: 'NEW DROP' },
    images: [{ type: String }],
    sizes: [{ type: String }],
    colors: [
      {
        name: { type: String },
        hex: { type: String }
      }
    ],
    rating: { type: Number, default: 5.0 },
    reviewsCount: { type: Number, default: 0 },
    description: { type: String, default: '' },
    fabric: { type: String, default: '' },
    inStock: { type: Number, default: 10 }
  },
  { timestamps: true }
)

export default mongoose.models.Product || mongoose.model('Product', productSchema)
