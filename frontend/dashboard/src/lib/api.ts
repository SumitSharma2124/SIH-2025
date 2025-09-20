// ...existing code...
// API configuration and client setup
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

class ApiClient {
  async updateReport(id: string, update: any) {
    return this.request<any>(`/reports/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(update),
    });
  }
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include',
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Health check
  async healthCheck() {
    return this.request<{ message: string; timestamp: string }>('/health');
  }

  // Auth endpoints
  async register(userData: { email: string; password: string; name: string }) {
    return this.request<{ message: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials: { email: string; password: string }) {
    return this.request<{ message: string; token?: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  // Reports endpoints
  async getReports() {
    return this.request<any[]>('/reports');
  }

  async createReport(reportData: any) {
    return this.request<any>('/reports', {
      method: 'POST',
      body: JSON.stringify(reportData),
    });
  }

  // User endpoints
  async getUserProfile() {
    return this.request<any>('/users/profile');
  }

  async updateUserProfile(profileData: any) {
    return this.request<any>('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  // Admin endpoints
  async getAllUsers() {
    return this.request<any[]>('/admin/users');
  }

  async deleteUser(userId: string) {
    return this.request<{ message: string }>(`/admin/users/${userId}`, {
      method: 'DELETE',
    });
  }
}

// Export a singleton instance
export const apiClient = new ApiClient(API_BASE_URL);
export default apiClient;