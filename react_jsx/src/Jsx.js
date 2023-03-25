import React from 'react'

const Jsx = () => {
  return (
    // using jsx without react.createElement
    <div>
        <h1> i am a react component</h1>
        
        {/* using jsx with react.createElement */}
        {React.createElement("div",{id:"first-div"},React.createElement("h2",{id:"heading2"},"i am rendered to show how to use jsx using React.createElement"))}
    </div>

    
  )
}

export default Jsx