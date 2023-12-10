/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'react-bootstrap';
import styles from '@/scss/components/_home.module.scss';

const HelpedUs = () => {
  return (
    <div className={`${styles.helpedUs_wrapper} d-flex flex-column align-item-center text-center mt-4 px-5 `}>
      <div className={`${styles.top} mb-4`}>
        <div className={`${styles.heading} fs-20 fw-800`}>You have helped us reach here</div>
        <div className={`${styles.tagline} text-muted fs-14`}>
          And we are commited to helping you achieve your financial goals
        </div>
      </div>
      <div className={`${styles.bottom}`}>
        <Row className={`${styles.state_row} justify-content-lg-center`}>
          <Col xs={6} md={4} lg={2} className={`${styles.state_col} mb-5`}>
            <div className={`${styles.content} d-flex flex-column`}>
              <div className={`${styles.imageWrapper} mb-3`}>
                <img src="/icons/state/eyewatch.png" alt="icon" />
              </div>
              <div className={`${styles.body}`}>
                <span className={`${styles.state} d-block fw-600 fs-18`}>25k+ Hours</span>
                <span className="text-muted fs-15">Daily view time</span>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2} className={`${styles.state_col} mb-5`}>
            <div className={`${styles.content} d-flex flex-column`}>
              <div className={`${styles.imageWrapper} mb-3`}>
                <img src="/icons/state/clouddownload.png" alt="icon" />
              </div>
              <div className={`${styles.body}`}>
                <span className={`${styles.state} d-block fw-600 fs-18`}>800K+</span>
                <span className="text-muted fs-15">Play Store downloads</span>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2} className={`${styles.state_col} mb-5`}>
            <div className={`${styles.content} d-flex flex-column`}>
              <div className={`${styles.imageWrapper} mb-3`}>
                <img src="/icons/state/people.png" alt="icon" />
              </div>
              <div className={`${styles.body}`}>
                <span className={`${styles.state} d-block fw-600 fs-18`}>160K+</span>
                <span className="text-muted fs-15">Daily visitors</span>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2} className={`${styles.state_col} mb-5`}>
            <div className={`${styles.content} d-flex flex-column`}>
              <div className={`${styles.imageWrapper} mb-3`}>
                <img src="/icons/state/youtube.png" alt="icon" />
              </div>
              <div className={`${styles.body}`}>
                <span className={`${styles.state} d-block fw-600 fs-18`}>14K+</span>
                <span className="text-muted fs-15">Youtube Subscribers</span>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2} className={`${styles.state_col} mb-5`}>
            <div className={`${styles.content} d-flex flex-column`}>
              <div className={`${styles.imageWrapper} mb-3`}>
                <img src="/icons/state/youtube.png" alt="icon" />
              </div>
              <div className={`${styles.body}`}>
                <span className={`${styles.state} d-block fw-600 fs-18`}>1.1M+</span>
                <span className="text-muted fs-15">Monthly platform users</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HelpedUs;
