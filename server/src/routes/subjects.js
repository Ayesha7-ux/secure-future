const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

router.get('/', subjectController.getAllSubjects);
router.post('/', subjectController.createSubject);
router.get('/:slug', subjectController.getSubjectBySlug);

module.exports = router;
