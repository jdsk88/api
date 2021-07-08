import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(()=>{
  console.log(`connected ${process.env.MONGO_DB}`)
})
