import React, { useState } from 'react'

function ImageContent({img,btnContent, description}) {
    const [show1, setShow1] = useState(false);
    const onClick = () => {
        setShow1(!show1);
    }
    return (
        <div>
                 <button onClick={onClick}> {btnContent}</button>
                 {show1 ?<div> <img src={img}/></div> : null}
        <p>
          {description}  Details Description goes in there
        </p>
        </div>
    )
}

export default ImageContent
