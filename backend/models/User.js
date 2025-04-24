import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'researcher'], required: true },
  department: { type: String, required: true },
  institution: { type: String },
  avatar: { type: String },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
