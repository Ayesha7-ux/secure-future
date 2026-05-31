const Subject = require('../models/Subject');

// Get all subjects
exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a subject (Admin only - middleware to be added)
exports.createSubject = async (req, res) => {
  const subject = new Subject({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    icon: req.body.icon,
    slug: req.body.slug || req.body.name.toLowerCase().replace(/ /g, '-')
  });

  try {
    const newSubject = await subject.save();
    res.status(201).json(newSubject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get subject by slug
exports.getSubjectBySlug = async (req, res) => {
  try {
    const subject = await Subject.findOne({ slug: req.params.slug });
    if (!subject) return res.status(404).json({ message: 'Subject not found' });
    res.json(subject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
