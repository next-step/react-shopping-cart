import { setupServer } from "msw/node";
import { handlers } from "mocks/handlers";

// Initialize a new instance of the server.
const server = setupServer(...handlers);

export default server;