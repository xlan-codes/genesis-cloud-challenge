  
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const instanceTypeSchema = new Schema({

	instanceType: { type: 'String', unique: false, required: false },
	instanceTypeIndentifier: { type: 'String', unique: false, required: false },

})

const InstanceType = mongoose.model('InstanceType', instanceTypeSchema)
export default InstanceType;