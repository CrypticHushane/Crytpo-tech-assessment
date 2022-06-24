import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Exchange as ExchangeType } from '../types/exchange';

function Exchange() {
    const [exchange, setExchange] = useState<ExchangeType[]>([{ name: '', id: ''}]);

    //function to fetch exchange data
    const fetchExchange = async () => {
        const response = await fetch('/api/crypto/exchange');
        const data = await response.json(); //data is an array of objects
        setExchange(data); //set exchange data to state
    }

    useEffect(() => {
      fetchExchange(); //fetch exchange data
    }, []);
    
    
  return (
    <>
        {
            //loop through exchange data and display each exchange
            exchange && exchange.map((item, index) => {
                return (   
                    <Link href={{
                                pathname: '/exchange/[id]',
                                query: { id: item.id },
                            }} key={index}>
                            <div className={styles.card}>
                                <h1>{item.name}</h1>
                            </div>
                    </Link>
                    
                );
            }
        , [])}
    </>
  )
} 

export default Exchange