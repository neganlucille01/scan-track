import React from 'react'

const Home = ({params}) => {
    const {homeId} = params
    //fetch request `tweet/comments/${homeid}`
  return (
    <div>Home : {homeId}</div>
  )
}

export default Home