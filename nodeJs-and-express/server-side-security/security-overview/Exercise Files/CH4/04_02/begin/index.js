import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit'
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// helmet setup
app.use(helmet());

// rate limit set up

const rateLimter = new rateLimit({
	// set up for 15 minutes per IP address
  windowsMs: 15 * 60 * 1000,
  // 100 requests in 15 minutes
  max: 100,
  //  no delay can add a 1000 ms per request if required
  delayMs: 0,
});

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb');

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);