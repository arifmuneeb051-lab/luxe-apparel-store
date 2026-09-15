import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phone: { type: String, default: '' },
    address: { type: String, default: '' },
    city: { type: String, default: '' },
    postalCode: { type: String, default: '' },
    country: { type: String, default: 'United States' },
    role: { type: String, enum: ['client', 'admin'], default: 'client' }
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', userSchema)
