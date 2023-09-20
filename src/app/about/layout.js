import React from 'react'
import Link from 'next/link'

const layout = ({ children }) => {
    return (

        <div>
            <p>common about page layout</p>
            <ul>
                <li>
                    <h4>Login Navbar</h4>
                </li>
                <li>
                    <Link href="/about">Login Main</Link>
                </li>
                <li>
                    <Link href="/about/city">city Login </Link>
                </li>
                <li>
                    <Link href="/about/student">student Login </Link>
                </li>
            </ul>
            {/* {children} */}
        </div>
    )
}

export default layout