export function generateError(message) {
  return {
    customMessage: message,
  };
}

export class CustomError extends Error {}
