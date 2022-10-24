import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pictures = require("./routes/pictures");

app.use('/pictures', pictures);

app.listen(5001, () => {
  console.log('Server is starting on port 5001');
});
