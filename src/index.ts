import type { Server } from "http";
import { initServer } from "./app";

/**
 * The main function initializes the server and returns the Server instance.
 * This function serves as the entry point for starting the application.
 *
 * @returns The Server instance created by the initServer function.
 */
function main(): Server {
	return initServer();
}

// Start the server by calling the main function
const server = main();

/**
 * Gracefully handle the SIGINT signal (e.g., when the process is terminated).
 * This will close the server and stop accepting new connections.
 */
process.on("SIGINT", () => {
	server.close();
});
