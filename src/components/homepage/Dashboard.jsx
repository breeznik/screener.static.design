'use client';
import styles from '@/scss/components/_home.module.scss';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="dashboard_wrapper">
      <Chart />
    </div>
  );
};

export default Dashboard;

const Chart = () => {
  const [selectedStock, setSelectedStock] = useState(0);
  return (
    <Container fluid={'md'} className={`${styles.chartContainer} px-0`}>
      <div>
        <div className={`${styles.containerTop} text-nowrap`}>
          <span className={`${styles.heading} fw-800 fs-15 text-wrap px-md-0`}>
            Live IntraDay Advance and Decline Ratio Chart
          </span>
          <div className={`${styles.chooseStocks} d-flex align-items-center mt-2 px-md-0`}>
            <span className={` fs-14 fw-500 px-2 py-2 shadow`}>All Stocks</span>
            <div className={`${styles.stocks} d-flex overflow-x-scroll gap-4 fs-13 ms-3`}>
              {[...'t'.repeat(20)].map((string, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => setSelectedStock(index)}
                    className={`${styles.stock} px-2 py-1 rounded cursor-pointer ${
                      selectedStock === index ? 'bg-dark text-white fw-500' : 'text-black-50'
                    }`}
                  >
                    Nifty {index}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className={`${styles.containerBody} bg-dark text-white fs-20 d-flex mt-3`}>
          <span className="m-auto">chart here</span>
        </div>
      </div>
    </Container>
  );
};
