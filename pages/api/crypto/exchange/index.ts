// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Exchange } from '../../../../types/exchange';

//function that calls to the API and returns the data in JSON format of type Exchange

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Exchange>
) {
  try {
    let response = await fetch(`https://api.abyiss.com/v1/exchanges?apiKey=${process.env.ABYISS_API_KEY}`);
    let exhanges = await response.json();
    res.status(200).json(exhanges);
  } catch (error) {
    res.status(400).json({
      name: "Error fetching exchanges",
      id: 'error'
    });
  }
  
}
