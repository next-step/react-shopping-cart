import errorHandlers from './handlers/Error';
import productsHandlers from './handlers/productsHandlers';

const handlers = [...errorHandlers, productsHandlers];

export default handlers;
