import Image from 'next/image'
import { Me,WhatsApp} from '@/components'
import Head from 'next/head'



export default function Biography() {
  return (
    <div>
    <Head>
        <title>
          My Life | Christopher
        </title>
        <meta
          name="Biography"
          content="A young entrepenuer taking charge of his dreams until he does.Well this is about his life."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Me />
      <WhatsApp/>

   </div>
  )
}
