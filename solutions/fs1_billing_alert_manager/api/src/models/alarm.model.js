  
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const alarmSchema = new Schema({

	instance: { type: 'String', unique: false, required: true },
	threshold: { type: 'Number', unique: false, required: true },
	destroy: {type: "Boolean", unique: false, required: false},
	notification: {type: 'Boolean', unique: false, require: false},
	status: { type: 'Boolean', unique: false, required: true }

}, { timestamps: { createdAt: 'created_at' } })

const Alarm = mongoose.model('Alarm', alarmSchema)
export default Alarm;