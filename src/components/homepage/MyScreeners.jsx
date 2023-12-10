import { Col, Row } from 'react-bootstrap';
import styles from '@/scss/components/_home.module.scss';

const MyScreeners = () => {
  return (
    <div className={`${styles.screeners_wrapper} bg-light p-3 rounded`}>
      <span className={`${styles.heading} fw-600 fs-17`}>My Screeners</span>
      <Row className={`${styles.screener_row} mt-4`}>
        <Col xs={12} md={4} className={`${styles.screener_col}`}>
          <div className={`${styles.content} mb-4 d-flex align-items-center gap-3`}>
            <div className={`${styles.screenerImage} p-1`} style={{ background: '#fee9e8' }}>
              <img src="/icons/live.png" alt="icon" />
            </div>
            <div className={`${styles.body} w-100  p-1 `}>
              <span className="heding fw-500">Live Market Screener</span>
              <div className="filters text-secondary fs-13">No Filter Created Yet</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className={`${styles.screener_col}`}>
          <div className={`${styles.content} mb-4 d-flex align-items-center gap-3`}>
            <div className={`${styles.screenerImage} p-1`} style={{ background: '#ecf5fe' }}>
              <img src="/icons/productivity.png" alt="icon" />
            </div>
            <div className={`${styles.body} w-100  p-1`}>
              <span className="heding fw-500">Advance Stock Screener</span>
              <div className="filters text-secondary fs-13">No Filter Created Yet</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className={`${styles.screener_col}`}>
          <div className={`${styles.content} mb-4 d-flex align-items-center gap-3`}>
            <div className={`${styles.screenerImage} p-1`} style={{ background: '#fff6e4' }}>
              <img src="/icons/web-browser.png" alt="icon" />
            </div>
            <div className={`${styles.body} w-100  p-1`}>
              <span className="heding fw-500">Option Screener </span>
              <div className="filters text-secondary fs-13">No Filter Created Yet</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MyScreeners;
