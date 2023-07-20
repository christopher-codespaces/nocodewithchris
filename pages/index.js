import Image from 'next/image'
import { Hero, NavBar ,Logo,Portfolio,FAQ} from '@/components';
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>
          {" "}
          Welcome To Christopher Makombe
        </title>
        <meta
          name="description"
          content="A young entrepenuer taking charge of his dreams until he does."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Logo/>
      <FAQ/>
      <Portfolio />
   </>
  )
}
