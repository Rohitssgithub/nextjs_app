import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function page() {
    return (
        <>
            <h1>About page</h1>
            <Link href="/about/student" >Go to student page</Link>
            <br /> <br />
            <Link href="/about/city" >Go to city page</Link>
            <br />
            <Link href='/'>go back</Link>

        </>
    )
}

export function generateMetadata({ params }) {
    return {
        title: 'about page'
    }
}
