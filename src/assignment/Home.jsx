import React from 'react'

import Banna from './Banna'
import Experience from './Experience';
import Questionandans from './Questionandans';
import Casestudy from './Casestudy';
import Rating from './Rating';

function Home() {
  return (
    <div>
      <Banna />
      <Experience />
      <Casestudy />
      <Questionandans />
      <Rating />
    </div>
  )
}

export default Home