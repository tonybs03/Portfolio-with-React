import React from 'react';
import { useState } from 'react';
import funcs from '../animations/TextAnimation';
import './Resume.css';
import tonyfan from '../assets/pdf/tonyfan.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom'
import htmlIcon from "../assets/icons/html.png"
import cssIcon from "../assets/icons/css.png"
import jsIcon from "../assets/icons/js.png"
import jqIcon from "../assets/icons/jq.png"
import rdIcon from "../assets/icons/rd.png"
import reactIcon from "../assets/icons/react.png"
import bsIcon from "../assets/icons/bs.png"
import apiIcon from "../assets/icons/api.png"
import nodeIcon from "../assets/icons/node.png"
import expIcon from "../assets/icons/exp.png"
import mysqlIcon from "../assets/icons/mysql.png"
import mdbIcon from "../assets/icons/mdb.png"
import gqlIcon from "../assets/icons/gql.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';


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
            <h1> Proficiencies </h1>
            <AnimationOnScroll class="icon-card" animateIn="animate__fadeInRight" duration={1.8} animateOnce='true'>
              <div class="icons">
                <div class="icon-card">
                  <img class="iconimg" src={htmlIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={cssIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={jsIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={jqIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={rdIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={reactIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={bsIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={apiIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={nodeIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={expIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={mysqlIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={mdbIcon} alt='html' />
                </div>
                <div class="icon-card">
                  <img class="iconimg" src={gqlIcon} alt='html' />
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
