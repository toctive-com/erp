import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: { type: String, required: true, unique: true, index: { unique: true} },
  emailVerifiedAt: { type: Date, default: null },

  password: String,

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  
});

UserSchema.path('email').index({ unique: true });

export const User = mongoose.model('User', UserSchema);
export default User;
