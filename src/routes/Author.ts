import express from 'express';
import controller from '../controllers/Author';

const router = express.Router();

router.post('/create', controller.createAuthor);
router.get('/get/:authorId', controller.readAuthor);
router.get('/get', controller.readAllAuthor);
router.patch('/update/:authorId', controller.updateAuthor);
router.delete('/delete', controller.deleteAuthor);

export = router;
