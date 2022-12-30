import 'dotenv/config';
import 'module-alias/register'; // it registers our module aliases
import validateEnv from '@/utils/validateEnv';
import App from './app';

//it checks if our env variables are all there
validateEnv();

//App class /constructor takes two param : array of controllers and port - port from env is always returned as a string. thus converted to Number
const app = new App([], Number(process.env.PORT))

app.listen();