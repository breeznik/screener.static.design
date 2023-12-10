/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'react-bootstrap';

const WatchListChart = () => {
  return (
    <div className="wathListChart_wrapper text-nowrap">
      <div className="head d-flex mb-4">
        <span className="fw-800 fs-19">Watchlist</span>
        <span className="ms-auto px-3 py-2 rounded-pill bg-dark text-white fs-13 fw-400">Create New</span>
      </div>
      <Row className="flex-nowrap overflow-x-scroll">
        {[...'t'.repeat(5)].map((index, string) => {
          return (
            <Col key={index} style={{ maxWidth: 'fit-content' }}>
              <div className="watchListCard bg-light p-3 mb-3 rounded-2">
                <div className="left">
                  <div className="name fw-800">IOB</div>
                  <div className="vol fs-14 mb-2">VOL: 2,344,678</div>
                  <div className="fw-800 mb-2">85.15</div>
                  <div
                    className="changes text-green p-1 rounded fs-12"
                    style={{ background: '#e9f2f4', width: 'fit-content' }}
                  >
                    <img src="/icons/arrow-up.png" style={{ width: '11px' }} alt="up" />
                    <span>1.90 (0.01%)</span>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default WatchListChart;
