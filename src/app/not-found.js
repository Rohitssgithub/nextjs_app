import Link from 'next/link';

const Notfound = () => {
    return (
        <>
            <div className='not_found_page'>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link href="/">Go back to the home page</Link>
            </div>
        </>
    )
}

export default Notfound