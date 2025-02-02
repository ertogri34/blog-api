import { config } from "dotenv";

/**
 * Load environment variables from the appropriate .env file based on NODE_ENV.
 */
config({ path: `.env.${process.env.NODE_ENV}` });

/**
 * Check if the PORT environment variable is defined.
 * If not, throw an error with a descriptive message.
 */
if (!process.env.PORT) {
	throw new Error(
		"PORT is not defined. Please add a PORT value in your .env file.",
	);
}

/**
 * Convert the PORT environment variable to a number.
 */
const port = Number(process.env.PORT);

/**
 * Validate the PORT value to ensure it is a valid number
 * within the acceptable range (0-65535).
 */
if (isNaN(port) || port < 0 || port > 65535) {
	throw new Error(
		"Invalid PORT value. PORT must be a number between 0 and 65535.",
	);
}

/**
 * Check if the ALLOW_LIST environment variable is defined.
 * If not, throw an error indicating it is missing.
 */
if (!process.env.ALLOW_LIST) {
	throw new Error(
		"ALLOW_LIST is not defined. Please add an ALLOW_LIST value in your .env file.",
	);
}

/**
 * Split the ALLOW_LIST string into an array for easier handling.
 */
const allowArray = process.env.ALLOW_LIST.split(",");

/**
 * Set up the configuration object to hold the application's environment settings.
 */
const configuration = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: port,
	ALLOW_LIST: allowArray,
};

/**
 * Export the configuration object for use throughout the application.
 */
export default configuration;
