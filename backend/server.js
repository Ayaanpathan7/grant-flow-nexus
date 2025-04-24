import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRouter from './routes/users.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/grant-flow-nexus';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Sample route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend server is running' });
});

// Use users routes
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
