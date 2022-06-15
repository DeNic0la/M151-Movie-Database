import { Router } from 'express';
import {
    fabiansFunction
} from './controller.js';

const router = Router();

router.get('/:movieId/:rating', fabiansFunction);

export { router };