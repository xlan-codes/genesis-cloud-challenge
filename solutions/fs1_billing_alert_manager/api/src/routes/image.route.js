import {paths} from '../constants.js';
import express from 'express';
import { ImageController } from '../controllers/image.controller.js';

export const imageRouter = new express.Router();

/**
 * get all images route
 */
imageRouter.get(paths.image.basePath, ImageController.getImages);