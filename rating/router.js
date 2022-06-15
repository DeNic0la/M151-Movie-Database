import { Router } from 'express';
import {
    fabiansFunction
} from './controller.js';

const router = Router();

router.get('/rating/:movieId/:rating', fabiansFunction);

export { router };