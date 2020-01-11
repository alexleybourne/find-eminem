import Head from 'next/head'
import Eminems from 'components/Eminems'
import ScoreBoard from 'components/ScoreBoard'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('components/Eminems'),
  { ssr: false }
)

export default function Home() {

  return (
    <div>
      <Head>
        <title>Find Eminem</title>
        <link rel="shortcut icon" href="favicon.ico"/>
      </Head>
      {/* <ScoreBoard score='04:23'/> */}
      <DynamicComponentWithNoSSR/>
    </div>
  )
}
