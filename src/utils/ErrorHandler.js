import toast from 'react-hot-toast';

export class ErrorHandler {
  static handle(error) {
    console.error('Error:', error);

    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('401')) {
        toast.error('Please login to continue');
        return;
      }

      if (error.message.includes('403')) {
        toast.error('You do not have permission to perform this action');
        return;
      }

      if (error.message.includes('404')) {
        toast.error('Resource not found');
        return;
      }

      if (error.message.includes('Network Error')) {
        toast.error('Please check your internet connection');
        return;
      }

      // Generic error message
      toast.error(error.message || 'Something went wrong');
    } else {
      toast.error('An unexpected error occurred');
    }
  }

  static async handleAsync(promise) {
    try {
      const data = await promise;
      return [data, null];
    } catch (error) {
      this.handle(error);
      return [null, error];
    }
  }
}
