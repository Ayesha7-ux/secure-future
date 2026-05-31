const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['O Level', 'A Level', 'IGCSE', 'General'], 
    required: true 
  },
  description: { type: String },
  icon: { type: String }, // Icon name from Lucide
  slug: { type: String, required: true, unique: true },
  resourceCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Subject', subjectSchema);
