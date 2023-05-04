import express from 'express';
import { getAllMechanics, createMechanic } from '../controllers/addressController';

const router = express.Router();

router.get('/', getAllMechanics);
router.post('/', createMechanic);

export default router;
