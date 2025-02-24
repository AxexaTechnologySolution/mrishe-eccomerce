import toast from 'react-hot-toast';
import { ErrorHandler } from './ErrorHandler';

const API_URL = 'https://api.example.com'; // Replace with your actual API URL

class ApiServices {
  static async get(endpoint) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      ErrorHandler.handle(error);
      return { error: 'Failed to fetch data' };
    }
  }

  static async post(endpoint, body) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to post data');
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      ErrorHandler.handle(error);
      return { error: 'Failed to post data' };
    }
  }

  static async put(endpoint, body) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to update data');
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      ErrorHandler.handle(error);
      return { error: 'Failed to update data' };
    }
  }

  static async delete(endpoint) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete data');
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      ErrorHandler.handle(error);
      return { error: 'Failed to delete data' };
    }
  }
}

export default ApiServices;
