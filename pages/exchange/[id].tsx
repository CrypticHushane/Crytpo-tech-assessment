import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { CurrentPrice } from '../../types/current-price';
import Image from 'next/image';

function Id() {
    const router = useRouter(); //router is a Next.js object used for getting the query params
    const [market, setMarket] = useState<String[]>([]); //market is an array of strings, easier to get Bitcoin market data
    const [currentPrice, setCurrentPrice] = useState<CurrentPrice[]>([{ exchange: '', price: 0, timestamp: "", market: '' }]); //currentPrice is an array of objects, easier to get Bitcoin current price data of specified exchange

    //function to retreieve market data of current exchange
    const fetchMarket = async () => {

        const response = await fetch(`https://api.abyiss.com/v1/${router.query.id}/markets?apiKey=${process.env.API_KEY}`);

        const data = await response.json(); //data is an array of objects

        setMarket(data); //set market data to state
    }

    //function to retreieve current price data of current exchange with specified market
    const fetchCurrentPrice = async () => {

        let temp : any = []; //temp is an array of objects, used to set and display current price data once data is retrieved
        let response: any = undefined; //response is a response object, used to get the data from the API
        let ifBtcUsd = market.includes('BTC/USD'); //ifBtcUsd is a boolean, used to check if the current exchange has the BTC/USD market
        let ifBtcUsdt = market.includes('BTC/USDT'); //ifBtcUsdt is a boolean, used to check if the current exchange has the BTC/USDT market
        
        if(ifBtcUsd) {
          response = await fetch(`https://api.abyiss.com/v1/${router.query.id}/BTC-USD/currentprice?apiKey=${process.env.API_KEY}`);
        }else if(ifBtcUsdt) {
          response = await fetch(`https://api.abyiss.com/v1/${router.query.id}/BTC-USDT/currentprice?apiKey=${process.env.API_KEY}`);
        }else{
          response = await fetch(`https://api.abyiss.com/v1/${router.query.id}/BTC-USDC/currentprice?apiKey=${process.env.API_KEY}`);
        }
        
        const data = await response.json(); //data is the response object converted to JSON
        temp.push(data); //push data to temp array
      
        setCurrentPrice(temp); //set current price data to state
    };
      

  useEffect(() => {
    if(router.isReady){ //if the router is ready, fetch market data and current price data
      fetchMarket();
      fetchCurrentPrice();
    }
    
  }, [router.isReady]); //useEffect is called every time the router is ready
  return (
    <>
    <div className={styles.container}>
      <main className={styles.main}>
        <Image src="https://assets.coincap.io/assets/icons/btc@2x.png" width={50} height={50}/>
        <h1 className={styles.title}>
          Bitcoin Info for <a href="#">{router.query.id}</a>
        </h1>
        {
            //display the current price data
            currentPrice && currentPrice.map((item, index) => {
                return (   
                  <Link href={{
                    pathname: '/exchange/[id]',
                  }} key={index}>
                          <div className={styles.card}>
                              <h1>Exchange: {item.exchange}</h1>
                              <h1>Price: {item.price && item.price.toLocaleString('en-US',{
                                  style: 'currency',
                                  currency: 'USD',
                              })}</h1>
                          </div>
                  </Link>
                    
                );
            }
          , [])
        }
        </main>
      </div>
        
    </>
  )
}

export default Id //export the Id function