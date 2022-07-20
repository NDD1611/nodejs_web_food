
import mongoose from 'mongoose'


//connect mongodb
//mongodb+srv://root:<password>@cluster0.pvgzm.mongodb.net/?retryWrites=true&w=majority
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Web_Food');  //connect local
    // await mongoose.connect(
    //   'mongodb+srv://root:xPHTVYLSfthEDhKM@cluster0.pvgzm.mongodb.net/Web_Food?retryWrites=true&w=majority'
    // ); //connect mongodb Altas Web_Foor root:xPHTVYLSfthEDhKM
    console.log("Connect successfully!");
  }
  catch (error) {
    console.log("connect faile!");
  }
}

export default connect;