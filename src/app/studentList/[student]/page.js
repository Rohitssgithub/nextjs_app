'use client'
import React from 'react'
const page = ({ params }) => {
    console.log(params)
    return (
        <>
            <p>student details</p>
            <h3>Name : {params.student}</h3>
        </>
    )
}

export default page