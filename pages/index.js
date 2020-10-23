import Head from 'next/head'
import Photo from 'components/Photo'
import ScoreBoard from 'components/ScoreBoard'

export default function Home() {
  return (
    <div>
      <h1>Find Eminem</h1>
      <ScoreBoard/>
      <Photo/>
    </div>
  )
}
