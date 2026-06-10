import React from 'react'
import Landing from '../COMPONENTS/Landing';
import Featured from '../COMPONENTS/Featured';
import Discounted from '../COMPONENTS/Discounted';
import Explore from '../COMPONENTS/Explore';
import Highlights from '../COMPONENTS/Highlights';

export default function Home() {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  )
}
