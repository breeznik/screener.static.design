/* eslint-disable @next/next/no-img-element */
'use client';
import { Col, Row } from 'react-bootstrap';
import styles from '@/scss/components/_home.module.scss';
const BrokersCards = () => {
  const imageUrls = [
    'https://d4rwm6gigk5fh.cloudfront.net/images/brokers/favicon/5paisa-fav.webp',
    'https://d4rwm6gigk5fh.cloudfront.net/images/brokers/favicon/trade_smart.webp',
    'https://d4rwm6gigk5fh.cloudfront.net/images/brokers/favicon/fyers.webp',
    'https://d4rwm6gigk5fh.cloudfront.net/images/brokers/favicon/zerodha-new.webp',
    'https://d4rwm6gigk5fh.cloudfront.net/images/brokers/favicon/angel-new.webp',
    'https://d4rwm6gigk5fh.cloudfront.net/images/brokers/favicon/upstox_fav_icon.webp',
    'https://d4rwm6gigk5fh.cloudfront.net/images/brokers/favicon/stoxhero.webp',
  ];
  return (
    <div className={`${styles.brokers}`}>
      <span className={`${styles.heading} fw-600 fs-20 d-md-none`}>Compare All Top Brokers</span>
      <Row className={`${styles.borkersRow} mt-3 overflow-x-scroll flex-nowrap text-nowrap`}>
        {imageUrls.map((imageUrls, index) => {
          return (
            <Col key={index} className={`${styles.borkerCol} pe-0`}>
              <div className={`${styles.broker} d-flex gap-2  py-1 px-2 rounded align-items-center border`}>
                <div
                  className={`${styles.borkerIcon}  d-flex align-items-center justify-content-center rounded-circle p-md-2 bg-white border-0`}
                >
                  <img src={imageUrls} alt="brokerIcon" />
                </div>
                <div className="d-flex flex-column">
                  <span className={`${styles.brokerName} fs-13 fw-500`}>Broker</span>
                  <span className={`${styles.brokerPerk} fs-12`}>Sab kuch Free</span>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default BrokersCards;
