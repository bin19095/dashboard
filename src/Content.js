import React from 'react'

function Content(props) {
    return (
        <div>
          {
              props.data.map((app) => 
              <li key={Math.random()*1000}>

                {app.App}
                {app.date}
              </li>
              )
          }
        
        </div>
    )
}

export default Content
