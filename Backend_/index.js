import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import bookRouter from './route/bookRoute.js';

dotenv.config();

const app = express();
app.use(cors())
const PORT = process.env.PORT || 8080;
const url = process.env.MONGODB_URL;

if (!url) {
  console.error('MongoDBURL environment variable is missing');
  process.exit(1);
}

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});

// Defining routes
app.use('/book', bookRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
