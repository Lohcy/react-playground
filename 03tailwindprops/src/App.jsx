// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObject = {
    userName: "Nikhil",
    age: "25"
  }
  let newArray = [1, 2, 3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind  test</h1>
      <Card userName="chai aur code" btnText= "click me" />
      <Card userName="Nikhil" />
    </>
  )
}

export default App
