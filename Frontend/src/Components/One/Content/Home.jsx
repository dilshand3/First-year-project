import React from 'react'
import "./Home.css"
import graphImage from './graph.png'; // Adjusted path

const Home = () => {
  return (
    <>
    <main>
        <div className="left">
hello world
        </div>
        <div className="right">
            <img src={graphImage} alt="Graph"/>
        </div>
    </main>
    </>
  )
}

export default Home