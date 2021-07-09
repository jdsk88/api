import mongoose from 'mongoose';
import { terminalLOG__success } from '../src/services/consolelog/console.js';

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(()=>{
  terminalLOG__success(`connected ${process.env.MONGO_DB}`)
})
