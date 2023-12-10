import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '@/scss/components/_home.module.scss';
const AutoSlider = () => {
  return (
    <div className={`${styles.autoSlider_wrapper} bg-dark text-white py-1`}>
      <Row className={`${styles.stockRow} flex-nowrap infinite-scroll `}>
        {[...'t'.repeat(3)].map((string, index) => {
          return (
            <Col key={index} className={`${styles.stockCol} p-0`}>
              <div className={`${styles.contentWrapper} d-flex align-items-center px-4`}>
                <div className={`${styles.stockIcon} d-flex me-3`}>
                  <img src="/icons/blur.png" alt="icon" />
                </div>
                <span className={`${styles.stockName} me-1`}>DIVISLAB</span>
                <span className={`${styles.stockPrice} me-2`}>3333</span>
                <div className={`${styles.stockChange} d-flex align-items-center text-green`}>
                  <img className="me-1" src="/icons/arrow-up.png" alt="icon" />
                  3.53%
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AutoSlider;
