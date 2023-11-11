export default {
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/'
      : 'https://nagp-middleware.alexsilvapro.com.br/'
}
