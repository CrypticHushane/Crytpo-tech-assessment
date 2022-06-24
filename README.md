## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Fetching Data From the API

To retrieve exchange, exchange markets and the bitcoin current price for those exchanges, you would first need to create an environemnt file to retrieve your environment variables.

```bash
touch .env
# or
mv .env.example .env
```
The following variables are required for api connectivity and communication: 
- `ABYISS_API_KEY`

## Screenshots

<p align="center">
  <img src="/public/screenshot/exchange-page.png" width="350" title="hover text">
  <img src="/public/screenshot/currentprice-page.png" width="350" alt="accessibility text">
</p>