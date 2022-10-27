import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const authentication = require("./routes/authentication");
const pictures = require("./routes/pictures");

const connectDB = async () => {
  try { // should use process.env for conn, this is for demo purposes
    const conn = await mongoose.connect('mongodb+srv://william:test1234@cluster0.sp5jbew.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

app.use('/authentication', authentication);
app.use('/pictures', pictures);

app.listen(4000, () => {
  console.log('Server is starting on port 4000');
});
