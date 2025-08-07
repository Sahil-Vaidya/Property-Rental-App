import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'owner', 'renter'], default: 'renter' }
});

export default mongoose.model('User', userSchema);