import { ApiError, NetworkError } from './api';

export interface ErrorHandlerOptions {
  showToast?: boolean;
  logError?: boolean;
  fallbackMessage?: string;
}

export function handleError(error: unknown, options: ErrorHandlerOptions = {}) {
  const {
    showToast = true,
    logError = true,
    fallbackMessage = 'An unexpected error occurred'
  } = options;

  if (logError) {
    console.error('Error:', error);
  }

  let message = fallbackMessage;
  let statusCode = 500;

  if (error instanceof ApiError) {
    message = error.message;
    statusCode = error.statusCode;
    
    // Handle specific status codes
    switch (statusCode) {
      case 401:
        message = 'You are not authorized. Please login.';
        // Redirect to login if needed
        break;
      case 403:
        message = 'You do not have permission to perform this action.';
        break;
      case 404:
        message = 'The requested resource was not found.';
        break;
      case 422:
        message = 'Invalid data provided. Please check your input.';
        break;
      case 500:
        message = 'Server error. Please try again later.';
        break;
    }
  } else if (error instanceof NetworkError) {
    message = 'Network connection error. Please check your internet connection.';
  } else if (error instanceof Error) {
    message = error.message;
  }

  if (showToast) {
    // TODO: Implement toast notification
    // For now, we'll use alert
    if (typeof window !== 'undefined') {
      alert(message);
    }
  }

  return {
    message,
    statusCode,
    error
  };
}

export function createErrorBoundaryMessage(error: Error): string {
  if (error instanceof ApiError) {
    return `API Error: ${error.message}`;
  }
  if (error instanceof NetworkError) {
    return 'Network connection error. Please refresh the page.';
  }
  return 'Something went wrong. Please refresh the page.';
}
