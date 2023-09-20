'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
const layout = ({ children }) => {
    const pathName = usePathname();
    console.log(pathName);

    return (
        <div>
            {
                // pathName !== "/login/customer" ?

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link href="/login">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/login/employee">employee</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/login/customer">customer</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                // : null
            }
            {/* <nav  className="navbar navbar-expand-lg navbar-light bg-light">
                <div  className="container-fluid">
                    <a  className="navbar-brand" href="#">Navbar</a>

                    <div  className="collapse navbar-collapse" id="navbarNav">
                        <ul  className="navbar-nav">
                            <li  className="nav-item">
                                <Link href="/login">Home</Link>
                            </li>
                            <li  className="nav-item">
                                <Link href="/login/employee">Features</Link>
                            </li>
                            <li  className="nav-item">
                                <Link href="/login/customer">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            {children}
        </div>
    )
}

export default layout