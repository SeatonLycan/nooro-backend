import express from 'express';
import router from './routes/index';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from Next.js
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});