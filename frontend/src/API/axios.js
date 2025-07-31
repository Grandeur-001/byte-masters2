import axios from 'axios'

const api = axios.create({
  baseURL: '/api', // Proxy to backend (see Vite proxy below)
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // optional: for auth cookies/session
})

// 🔁 Add interceptors if needed (e.g., token auth)
api.interceptors.request.use(
  (config) => {
    // Example: attach token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, 
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global error (optional)
    if (error.response && error.response.status === 401) {
      // e.g. auto logout or redirect to login
    }
    return Promise.reject(error)
  }
)

export default api
