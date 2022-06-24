This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Fetching Data From the API

To retrieve exchange, exchange markets and the bitcoin current price for those exchanges, you would first need to create an environemnt file to retrieve your environment variables.

```bash
touch .env
# or
mv .env.example .env
```
The following variables are required for api connectivity and communication: 
- `ABYISS_API_KEY`