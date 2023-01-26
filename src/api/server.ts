import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/error';
import eligibilityRouter from './routes/Eligibility';

const app = express();

app.use(express.json());
app.use(cors());

app.use(eligibilityRouter);

app.use(errorHandler);

const PORT = process.env.APP_PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

export default app;
