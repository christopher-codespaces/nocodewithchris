import Image from 'next/image'
import { Timeline} from '@/components'
import Head from 'next/head'


export default function Journey() {
  return (
    <>
     <Head>
        <title>
          {" "}
          Welcome To Christopher Makombe
        </title>
        <meta
          name="description"
          content="A young entrepenuer taking charge of his dreams until he does.This is my journey"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Timeline />

   </>
  )
}
