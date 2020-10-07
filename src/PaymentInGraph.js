import React from 'react'

function PaymentInGraph(props) {
    return (
        <div>
            <img alt="online payment methods"
               src="https://33t2km132djh3q21qa47elmw-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/online-payment-methods.png" 
               sizes="(max-width: 684px) 100vw, 684px" 
               ></img>
        <div className="des__part"  style={{marginLeft:'20%',justifyContent:'center', textAlign:'center',alignItems:'center'}}>
           { props.description}
        </div>
        </div>
    )
}

export default PaymentInGraph