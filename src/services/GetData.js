import axios from 'axios'
import NProgress from 'nprogress'


const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default {
  getHome() {
    return apiClient.get('/home')
  },
  getAbout() {
    return apiClient.get('/about')
  },
  getPortfolio() {
    return apiClient.get('/portfolio')
  },
  getContact() {
    return apiClient.get('/contact')
  },
  getBlogs() {
    return apiClient.get('/blogs')
  },
  getBlog(id) {
    return apiClient.get('/blogs/' + id)
  },
}
