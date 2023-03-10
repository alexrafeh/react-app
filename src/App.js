import React from "react"
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


export default function App() {

  return (
    <BrowserRouter>
      <Link to="https://alexrafeh.github.io/react-app/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )




}


function Home() {
  return (
    <h1>Hello, React Router!</h1>
  )
}

function About() {
  return (
    <h1>About page goes here! 🎉</h1>
  )
}



