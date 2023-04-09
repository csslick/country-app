import React from 'react'

export default function Header(props) {
  const {handleDarkMode} = props;

  return (
    <header className='container'>
      <h1>Where in the world?</h1>
      <button 
        onClick={handleDarkMode}
      >Dark Mode</button>
    </header>
  )
}
