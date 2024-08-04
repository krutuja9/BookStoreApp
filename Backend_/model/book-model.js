import mongoose  from "mongoose";

const bookShema = new  mongoose.Schema({
  name:String,
  price:Number,
  category:String,
  image:String,
  title:String,
})
const Book = mongoose.model("Book", bookShema)

export default Book