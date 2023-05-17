import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  // TODO add attachments field
  // TODO add reminder field
  // TODO add repeatable field
  // TODO add repeatAt field
  // TODO add repeatEvery field

  User: { type: mongoose.Schema.Types.ObjectId, required: true },
  parentTask: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  description: { type: String },
  isDone: { type: Boolean, default: false },
  steps: { type: Array<String> },

  dueAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  
});

export const Task = mongoose.model('Task', TaskSchema);
export default Task;
