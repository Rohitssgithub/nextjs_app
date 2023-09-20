import React from 'react'
import Link from 'next/link'
import style from '../page.module.css'
const page = () => {
    return (
        <>
            <h1 className={style.main}>Login page</h1>
            {/* <Link href="/login/employee" >Go to employee login</Link>
            <br /> <br />
            <Link href="/login/customer" >Go to customer login</Link>
            <br />
            <Link href='/'>go back</Link> */}
        </>
    )
}

export default page