import React from 'react';
import { useState } from 'react';
import funcs from '../animations/TextAnimation';
import './Resume.css';
import tonyfan from '../assets/pdf/tonyfan.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Link } from 'react-router-dom'

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    );

  return (
    <div class="resumemain">
      <div class="resumebody">
        <div class="resumetitle">
          <funcs.TextAnimationR />
        </div>
        <div class="resumesection">
          <div class="resumePDF">
            <nav class="navPDF">
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Link to={tonyfan} target="_blank" download> <button class="downloadbtn" type="submit">Download CV</button> </Link>
              </div>
              <hr />
              <button class="downloadbtn" onClick={goToPrevPage}>Prev</button>
              <button class="downloadbtn" onClick={goToNextPage}>Next</button>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </nav>
            <div class="displayPDF">
              <Document file={tonyfan} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
            </div>
          </div>
          <div class="skillssection">
            dasda
          </div>
        </div>
      </div>
    </div>
  );
}
