'use client'
import React from 'react';
import Script from 'next/script';


const page = () => {
    return (
        <>
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