import 'dotenv/config';
import 'module-alias/register'; // it registers our module aliases
import App from './app';
import validateEnv from '@/utils/validateEnv';
import OrderController from '@/resources/order/order.controller';
import OrderItemController from '@/resources/orderItems/orderItem.controller';

//it checks if our env variables are all there
validateEnv();

//App class /constructor takes two param : array of controllers and port - port from env is always returned as a string. thus converted to Number
const app = new App([new OrderController(),new OrderItemController], Number(process.env.PORT))

app.listen();