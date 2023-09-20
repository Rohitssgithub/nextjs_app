"use client"
// import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function Home({ children }) {
  let router = useRouter()

  const navigatefun = (name) => {
    router.push(name)
  }
  // console.log(process.env)

  return (
    <>
      <main>
        <Link href='/login'>Go to login page</Link>
        <br />
        <Link href='/about'>Go to about page</Link>
        <br />
        <Link href='/studentList'>Go to student page</Link>
        <br />
        <Link href='/productlist'>Go to product page</Link>


        <button onClick={() => navigatefun('/login')}>Go</button>
      </main>
      <Image
        src='https://media.istockphoto.com/id/1466479719/photo/couple-choosing-a-color-for-the-walls-while-remodeling-their-house.webp?b=1&s=170667a&w=0&k=20&c=geAo9ts26EopF14-BDU916gcU8hJztNPlEM0D0VS860='
        alt="Description of the image"
        width={300}
        height={200}
      />
    </>
  )
}

