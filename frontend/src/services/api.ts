import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const endpoints = {
  // Health check
  health: '/health',
  
  // Projects
  projects: '/projects',
  project: (id: string) => `/projects/${id}`,
  featuredProjects: '/projects/featured',
  projectCategories: '/projects/categories',
  projectStats: '/projects/stats',
  likeProject: (id: string) => `/projects/${id}/like`,
  
  // Contact
  contact: '/contact',
  contactStats: '/contact/stats',
  
  // Auth
  login: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
  
  // Blog
  blog: '/blog',
  blogPost: (slug: string) => `/blog/${slug}`,
};

// API service functions
export const apiService = {
  // Health check
  health: () => api.get(endpoints.health),
  
  // Projects
  getProjects: (params?: any) => api.get(endpoints.projects, { params }),
  getProject: (id: string) => api.get(endpoints.project(id)),
  getFeaturedProjects: (limit?: number) => 
    api.get(endpoints.featuredProjects, { params: { limit } }),
  getProjectCategories: () => api.get(endpoints.projectCategories),
  getProjectStats: () => api.get(endpoints.projectStats),
  likeProject: (id: string) => api.post(endpoints.likeProject(id)),
  createProject: (data: any) => api.post(endpoints.projects, data),
  updateProject: (id: string, data: any) => api.put(endpoints.project(id), data),
  deleteProject: (id: string) => api.delete(endpoints.project(id)),
  
  // Contact
  submitContact: (data: any) => api.post(endpoints.contact, data),
  getContacts: (params?: any) => api.get(endpoints.contact, { params }),
  getContact: (id: string) => api.get(`${endpoints.contact}/${id}`),
  updateContactStatus: (id: string, status: string) => 
    api.put(`${endpoints.contact}/${id}/status`, { status }),
  deleteContact: (id: string) => api.delete(`${endpoints.contact}/${id}`),
  getContactStats: () => api.get(endpoints.contactStats),
  
  // Auth
  login: (credentials: any) => api.post(endpoints.login, credentials),
  register: (userData: any) => api.post(endpoints.register, userData),
  logout: () => api.post(endpoints.logout),
  
  // Blog
  getBlogPosts: (params?: any) => api.get(endpoints.blog, { params }),
  getBlogPost: (slug: string) => api.get(endpoints.blogPost(slug)),
};

export default api; 