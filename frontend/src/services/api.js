import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const portfolioAPI = {
    // Get portfolio data
    getPortfolioData: async () => {
        const response = await api.get('/portfolio');
        return response.data;
    },

    // Submit contact form
    submitContact: async (formData) => {
        const response = await api.post('/contact', formData);
        return response.data;
    },

    // Health check
    healthCheck: async () => {
        const response = await api.get('/health');
        return response.data;
    },
};

export default api;


