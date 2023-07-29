import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getFeaturedEvents } from '@/dummy-data'
import FeaturedEvents from '@/components/home/featuredEvents/FeaturedEvents'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const featuredEvents = getFeaturedEvents()
  return (
    <>
      <Head>
        <title>Max' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <FeaturedEvents featuredEvents={featuredEvents} />
    </>
  )
}
