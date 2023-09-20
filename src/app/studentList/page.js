import React from 'react';
import Link from 'next/link';

const page = () => {
    return (
        <>
            <p>Student list</p>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/studentList/1">1</Link>
                </li>
                <li className="nav-item">
                    <Link href="/studentList/2">2</Link>
                </li>
                <li className="nav-item">
                    <Link href="/studentList/3">3</Link>
                </li>
            </ul>
        </>
    )
}

export default page