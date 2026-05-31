const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['Note', 'Past Paper', 'Solved Answer', 'Study Guide', 'Worksheet', 'MCQs', 'Video'], 
    required: true 
  },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  category: { 
    type: String, 
    enum: ['O Level', 'A Level', 'IGCSE'], 
    required: true 
  },
  fileUrl: { type: String, required: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  views: { type: Number, default: 0 },
  downloads: { type: Number, default: 0 },
  tags: [String],
  comments: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String,
    rating: Number,
    date: { type: Date, default: Date.now }
  }],
  averageRating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', resourceSchema);
