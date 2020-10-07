import React from 'react'
import { ReactComponent as FraudChart} from './img/opay/fraud.svg';
import PaymentInGraph from './PaymentInGraph';
import RetailPayment from './RetailPayment';
import './Content1.css'
import PaymentSol from './PaymentSolution';
import CovidRetail from './CovidRetail';
function Content1() {
    const infoFraduCh="";
    const infoPyInGh="Third-party mobile and online payments are gaining popularity.Currently, 47% of online shoppers in Australia use credit cards to buy products online. 29% of Australians use services like PayPal. While these are the current standings, third-party payment systems or E-wallets like PayPal, Alipay, or Amazon Payments are seeing a rise in the future. By 2023 about 37% of online payments will be processed via e-wallets.";
    const Rp="";
    return (
        <div className="content1__part">
       
    
       <a href={`https://www.rba.gov.au/publications/bulletin/2014/dec/6.html`}> <RetailPayment /> </a>
        <PaymentInGraph description={infoPyInGh}/>
        <a href={`https://www.abs.gov.au/statistics/people/crime-and-justice/personal-fraud/latest-release#data-download`}> <FraudChart description=""/>
        </a>
        <PaymentSol/>
        <CovidRetail/>


        </div>
    )
}

export default Content1
