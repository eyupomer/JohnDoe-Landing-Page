import React from 'react'

const ComponentHeader = () => {
  return (
    <header className="header header-mini"> 
      <div className="header-title">Components</div> 
      <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Components</li>
         </ol>
      </nav>
   </header>
  )
}

export default ComponentHeader