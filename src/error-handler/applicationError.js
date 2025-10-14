// src/error-handler/applicationError.js
export class ApplicationError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = "ApplicationError";
    this.statusCode = statusCode;
  }
}
