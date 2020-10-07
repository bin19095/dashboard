import React from 'react'
import './RetailPayment.css';
function RetailPayment() {
    return (
        <div className="content__table">

						<table className="table-linear width100">
  <caption>
    Table 1: Examples of Fast Retail Payment Systems Introduced since 2000
  </caption>
  <thead>
    <tr>
      <th>Country</th>
      <th>System</th>
      <th className="align-center">Commencement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>South Korea</th>
      <td>Electronic Banking System (EBS)<sup>(a)</sup></td>
      <td className="align-center">2001</td>
    </tr>
    <tr>
      <th>Brazil</th>
      <td>Funds Transfer System (SITRAF)<sup>(b)</sup></td>
      <td className="align-center">2002</td>
    </tr>
    <tr>
      <th>Mexico</th>
      <td>Interbank Electronic Payment System (SPEI)<sup>(c)</sup></td>
      <td className="align-center">2004</td>
    </tr>
    <tr>
      <th>South Africa</th>
      <td>Real-Time Clearing (RTC)</td>
      <td className="align-center">2006</td>
    </tr>
    <tr>
      <th>United Kingdom</th>
      <td>Faster Payments (FPS)</td>
      <td className="align-center">2008</td>
    </tr>
    <tr>
      <th>China</th>
      <td>Internet Banking Payment System (IBPS)</td>
      <td className="align-center">2010</td>
    </tr>
    <tr>
      <th>India</th>
      <td>Immediate Payment Service (IMPS)</td>
      <td className="align-center">2010</td>
    </tr>
    <tr>
      <th>Sweden</th>
      <td>Payments in Real Time (BiR)<sup>(d)</sup></td>
      <td className="align-center">2012</td>
    </tr>
    <tr>
      <th>Poland</th>
      <td>Express ELIXIR</td>
      <td className="align-center">2012</td>
    </tr>
    <tr>
      <th>Singapore</th>
      <td>Fast and Secure Transfers (FAST)</td>
      <td className="align-center">2014</td>
    </tr>
    <tr>
      <th>Denmark</th>
      <td>RealTime24/7<sup>(e)</sup></td>
      <td className="align-center">2014</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colSpan={3}>
        <p>
          (a) Also known as HOFINET<br />
          (b) Sistema de Transferência de Fundos<br />
          (c) Sistema de Pagos Electrónicos Interbancarios<br />
          (d) Betalningar i Realtid<br />
          (e) Straksclearingen
        </p>
        <p className="source">Sources: National Sources; RBA</p>
      </td>
    </tr>
  </tfoot>
</table>
</div>

    )
}

export default RetailPayment
