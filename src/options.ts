export default {
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/api/v1/'
      : 'https://nagp-middleware.alexsilvapro.com.br/api/v1/'
}
