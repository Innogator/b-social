import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: 'String', required: true },
  description: { type: 'String', required: true },
  date: { type: 'Date', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true }
});

export default mongoose.model('Event', eventSchema);
