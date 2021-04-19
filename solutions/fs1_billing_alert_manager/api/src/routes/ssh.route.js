import {paths} from '../constants.js';
import express from 'express';
import { SSHController } from '../controllers/ssh.controller.js';

export const sshRouter = new express.Router();

/**
 * get ssh keys route
 */
sshRouter.get(paths.ssh.basePath, SSHController.getSSHs);