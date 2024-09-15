# Simple URL Redirect

Express.js app for Vercel. Redirects all requests to a specified URL.

### Why?
Some domain providers charge for SSL for subdomains. Vercel does not. I use this to securely redirect some URLs for free. Works good as long as traffic is low.

## Deployment

1. Fork/clone/import this repo.
2. Deploy on Vercel.
3. Set `REDIRECT_URL` in Vercel project settings.
4. Setup domain.
