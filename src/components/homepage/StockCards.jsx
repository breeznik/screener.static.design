/* eslint-disable jsx-a11y/alt-text */
'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import styles from '@/scss/components/_home.module.scss';
import { Col, DropdownButton, Row } from 'react-bootstrap';
const StockCards = ({ setStockCardOptions, stockCardOptions }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2]);
  const rowRef = useRef();

  const wheel = (e) => {
    const body = document.getElementsByTagName('body')[0];

    // rowRef.current.scrollLeft = rowRef.current.scrollLeft + e.deltaY;
    // console.log(e.target.scrollLeft, e.deltaY);

    if (e.deltaY > 0) {
      scrollToNext('INC');
    } else {
      scrollToNext();
    }
  };

  const scrollDisable = (action = 'disable') => {
    const body = document.getElementsByTagName('body')[0];
    if (action === 'enable') {
      body.classList.remove('overflow-hidden');
    } else {
      body.classList.add('overflow-hidden');
    }
  };

  const scrollToNext = (type = 'DEC') => {
    let length = rowRef.current.children.length - 1;
    let innercurrentIndexes = [...currentIndexes];

    const incrementer = () => {
      if (currentIndexes[currentIndexes.length - 1] < length) {
        innercurrentIndexes.shift();
        innercurrentIndexes.push(currentIndexes[currentIndexes.length - 1] + 1);
      }
    };

    const decrementer = () => {
      if (currentIndexes[0] > 0) {
        innercurrentIndexes.pop();
        innercurrentIndexes.unshift(currentIndexes[0] - 1);
      }
    };

    if (type === 'INC') {
      incrementer();
      rowRef.current.children[innercurrentIndexes[2]].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    } else {
      decrementer();
      rowRef.current.children[innercurrentIndexes[0]].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }

    setCurrentIndexes(innercurrentIndexes);
    console.log(innercurrentIndexes);
  };

  return (
    <div className={`mt-4 ${styles.stockCardsWrapper} d-flex align-items-center gap-3 `}>
      <img
        onClick={() => scrollToNext('DEC')}
        className={`${styles.sliderArrow} cursor-pointer cursor-pointer d-none d-lg-inline`}
        src="/icons/left-arrow.png"
        alt="icon"
      />
      <Row
        // onWheel={wheel}
        // onMouseOver={() => scrollDisable()}
        // onMouseLeave={() => scrollDisable('enable')}
        ref={rowRef}
        className={`overflow-x-scroll overflow-y-visible flex-nowrap ${styles.stockCardsRow}`}
      >
        {[...'t'.repeat(10)].map((string, index) => {
          return (
            <Col key={index} md={4} className={`${styles.stockCardCol}`}>
              <div className={`d-flex flex-column gap-2 rounded-3 pt-2 pb-2 pb-lg-0 pt-lg-3 my-1 ${styles.stockCard} `}>
                {/* cardTop */}
                <div
                  className={`d-flex gap-1  gap-lg-3 fs-15 fs-lg-15 fw-600 fw-lg-500 ${styles.cardTop}
                   px-3 px-lg-2 flex-column flex-lg-row `}
                >
                  <span className={`${styles.stockName}`}>NIFTY 50</span>
                  <div className="text-nowrap d-flex gap-2">
                    <span className={`${styles.price} fs-18 fs-lg-25 d-lg-none`}>20133.30</span>
                    <span
                      className={`text-green d-flex align-items-center gap-1 fw-400 fw-lg-500 ${styles.stockChangedState}`}
                    >
                      <img src="/icons/arrow-up.png" alt="icon" />
                      <>{`${265} (${60}%)`}</>
                    </span>
                  </div>
                </div>

                {/* cardMid */}
                <div
                  className={`d-flex fs-11 justify-content-between ${styles.cardMid}  px-3 px-lg-2 gap-3 flex-column flex-lg-row`}
                >
                  <div className={`${styles.stockPrice} d-flex align-items-center gap-2 d-none d-lg-flex`}>
                    <img src="/icons/up-arrow.png" alt="icon" />
                    <span className="price fs-lg-25 fw-500">1999.50</span>
                  </div>
                  <div className={`${styles.stockHighLow} d-flex gap-2 fs-lg-13 fw-500`}>
                    <div className={`${styles.high} d-flex flex-column`}>
                      <span className={`${styles.heading} text-muted`}>High</span>
                      <span className={`${styles.highPrice} text-green`}>{`${19576.96}`}</span>
                    </div>
                    <div className={`${styles.Low} d-flex flex-column ms-auto`}>
                      <span className={`${styles.heading} text-muted`}>Low</span>
                      <span className={`${styles.lowPrice} text-danger`}>{`${19576.96}`}</span>
                    </div>
                  </div>
                </div>

                {/* cardBottom */}
                <div
                  className={`${styles.cardBottom} 
                  border-top d-flex flex-column flex-lg-row d-lg-flex fs-13 fs-lg-9 
                  fs-xl-11
                  text-nowrap p-2`}
                >
                  <span className="">
                    <a className="px-1 py-2" href="#">
                      Analytics
                    </a>
                  </span>
                  <span className=" ">
                    <a className="px-1 py-2" href="#">
                      Options
                    </a>
                  </span>
                  <span className=" ">
                    <a className="px-1 py-2" href="#">
                      PCR
                    </a>
                  </span>
                  <span className=" ">
                    <a className="px-1 py-2" href="#">
                      Chain
                    </a>
                  </span>
                  <span className=" ">
                    <a className="px-1 py-2" href="#">
                      Max Pain
                    </a>
                  </span>
                  <span className="">
                    <a className="px-1 py-2" href="#">
                      Contributors
                    </a>
                  </span>
                </div>
                <img
                  onClick={() => {
                    setStockCardOptions((prev) => (prev === index ? null : index));
                  }}
                  className="d-lg-none position-absolute cursor-pointer p-1"
                  src={'/icons/more.png'}
                  style={stockCardOptions === index ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }}
                  alt="icon"
                />
              </div>
            </Col>
          );
        })}
      </Row>
      <img
        onClick={() => scrollToNext('INC')}
        className={`${styles.sliderArrow} cursor-pointer d-none d-lg-inline`}
        src="/icons/left-arrow.png"
        alt="icon"
      />
    </div>
  );
};

export default StockCards;

export const StocksBottomOptions = ({ stockCardOptions, setStockCardOptions }) => {
  return (
    <div
      className={`${styles.stockBottomOptions} fixed-bottom border-top bg-white`}
      style={stockCardOptions === null ? { bottom: '-100%' } : { bottom: '0' }}
    >
      <img
        onClick={() => {
          setStockCardOptions(null);
          console.log('click');
        }}
        className={`${styles.closebtn} position-absolute`}
        src="/icons/cross.png"
      ></img>
      <div className={`${styles.top} text-black py-2 shadow-sm text-nowrap  position-relative`}>
        <div className={`${styles.row} d-flex align-items-center text-center mx-4 px-4`}>
          <span className={` ${styles.price} fs-13 fw-600 text-muted `}>
            {/* <label>{`Price - `} </label> */}₹ 20133.5
          </span>

          <span className={` ${styles.stockname}  fw-600 fs-20`}>NIFTY{stockCardOptions}</span>

          <span className={` price-change text-green fw-600 fs-13`}>
            <img className="me-2 ms-1" src="/icons/arrow-up.png" alt="icon" />
            <>{`${265} (${60}%)`}</>
          </span>
        </div>
        {/* <div className={`${styles.highmin} position-absolute  bg-dark py-2  shadow-lg d-flex gap-4`}>
          <div className="fw-500 fs-13">
            <label className="">HIGH</label> <span className="text-green">1333</span>
          </div>
          <div className="fw-500 fs-13">
            <label className="">LOW </label> <span className="text-danger"> 1333</span>
          </div>
        </div> */}
      </div>
      <div className={`${styles.bottom} d-flex flex-column text-center px-5`}>
        <a className="py-2 " href="#">
          Analytics
        </a>
        <a className="py-2" href="#">
          Options
        </a>
        <a className="py-2" href="#">
          PCR
        </a>
        <a className="py-2" href="#">
          Chain
        </a>
        <a className="py-2" href="#">
          Max Pain
        </a>
      </div>
    </div>
  );
};
