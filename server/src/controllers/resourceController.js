const Resource = require('../models/Resource');

// Get all approved resources with filters
exports.getResources = async (req, res) => {
  try {
    const { category, type, subjectId, search } = req.query;
    let query = { status: 'approved' };

    if (category) query.category = category;
    if (type) query.type = type;
    if (subjectId) query.subjectId = subjectId;
    if (search) query.title = { $regex: search, $options: 'i' };

    const resources = await Resource.find(query).populate('subjectId', 'name');
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Upload a resource
exports.uploadResource = async (req, res) => {
  const resource = new Resource({
    title: req.body.title,
    type: req.body.type,
    subjectId: req.body.subjectId,
    category: req.body.category,
    fileUrl: req.body.fileUrl,
    uploadedBy: req.body.userId, // This should come from auth middleware
    status: 'pending' // Default to pending until approved by admin
  });

  try {
    const newResource = await resource.save();
    res.status(201).json(newResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get single resource
exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id).populate('subjectId', 'name');
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    
    // Increment views
    resource.views += 1;
    await resource.save();
    
    res.json(resource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
