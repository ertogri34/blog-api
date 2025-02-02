import type { Status } from "./Status";

/**
 * Interface representing a successful message response.
 * This is typically used to convey information back to the client.
 */
export interface IMessageResponse {
	/**
	 * A descriptive message related to the response.
	 * This could be a success message or any relevant information.
	 */
	message: string;

	/**
	 * The status of the response, indicating success or failure.
	 * It should conform to the Status type defined elsewhere.
	 */
	status: Status;
}

/**
 * Interface representing an error response.
 * This extends IMessageResponse to include additional error-related information.
 */
export interface IErrorResponse extends IMessageResponse {
	/**
	 * Optional stack trace string for debugging purposes.
	 * This is included only in development environments to help trace errors.
	 */
	stack?: string;
}
