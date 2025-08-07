import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  rentPerMonth: Number,
});

export default mongoose.model('Property', propertySchema);