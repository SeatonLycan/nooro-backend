import express from 'express';
import router from './routes/index';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});