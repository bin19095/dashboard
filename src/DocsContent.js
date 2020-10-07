import React from 'react'
import SinglePagePDFViewer from "./components/pdf/single-page";

import AllPagesPDFViewer from "./components/pdf/all-pages";
import samplePDF from "./sample.pdf";
import './DocsContent.css';
function DocsContent() {
    return (
         <div >
        
             <SinglePagePDFViewer pdf={samplePDF} />
             
               
        </div>
    )
}

export default DocsContent
