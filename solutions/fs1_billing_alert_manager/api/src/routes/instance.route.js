
import {paths} from '../constants.js';
import express from 'express';
import InstanceController  from '../controllers/instance.controller.js';

export const instanceRouter = new express.Router();

/**
 * get all instances route
 */
instanceRouter.get(paths.instance.basePath, InstanceController.getInstances);

/**
 * get all instances route
 */
instanceRouter.get(paths.instance.types, InstanceController.getInstanceType);

/**
 * get instance by id route
 * @param id of the instance
 */
instanceRouter.get(paths.instance.basePath + '/:id',InstanceController.getInstances);

/**
 * create instance route
 */
instanceRouter.post(paths.instance.basePath, InstanceController.createInstance);

/**
 * delete instance route
 * @param id of the instance
 */
instanceRouter.delete(paths.instance.basePath + '/:id',InstanceController.destoryInstance);

instanceRouter.patch(paths.instance.basePath,(req, res) => {

});

/**
 * update exist instance  route
 * @param id of the instance
 */
instanceRouter.put(paths.instance.basePath + '/:id',InstanceController.updateInstance);
