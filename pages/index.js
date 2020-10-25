import Head from 'next/head'
import Photo from 'components/Photo'
import ScoreBoard from 'components/ScoreBoard'
import Timer from 'components/Timer'

export default function Home() {
  return (
    <div>
      <h1>Find Eminem</h1>
      {/* <Timer/>
      <ScoreBoard/> */}
      <Photo/>
    </div>
  )
}
