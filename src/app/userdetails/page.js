'use client'
import React from 'react';
import Script from 'next/script';

const fetchData = async () => {
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json();
    return data.products
}
const page = async () => {

    let datas = await fetchData()
    console.log(datas)

    return (
        <>
            {
                datas.map((ele) => {
                    return (
                        <p>{ele.title}</p>
                    )
                })
            }
            <Script
                src='/location.js'
                onLoad={() => {
                    console.log('load')
                }}
            />
            <div>user geo location</div>
        </>
    )
}

export default page