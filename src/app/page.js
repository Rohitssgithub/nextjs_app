"use client"
// import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Home({ children }) {
  let router = useRouter()

  const navigatefun = (name) => {
    router.push(name)
  }

  return (
    <>
      <main>
        <Link href='/login'>Go to login page</Link>
        <br />
        <Link href='/about'>Go to about page</Link>
        <br />
        <Link href='/studentList'>Go to student page</Link>
        <button onClick={() => navigatefun('/login')}>Go</button>
      </main>
    </>
  )
}

