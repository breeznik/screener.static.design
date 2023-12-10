import { Container, Table } from 'react-bootstrap';
import styles from '@/scss/components/_home.module.scss';

const ResultCalender = () => {
  return (
    <Container className="p-0">
      <div className={`${styles.ResultCalender_wrapper}`}>
        <div className={`${styles.calenderTop} mb-2 d-flex`}>
          <span className={`${styles.heading} fs-17 fs-md-20 fw-600`}>Result Calender</span>
          <span className="ms-auto text-info fs-14"> All Results</span>
        </div>

        <div className={`${styles.table}`}>
          <div className={`${styles.tableHeadings} fs-12 fs-md-14 mb-1 d-flex text-nowrap`}>
            <span>CODE</span>
            <span>SYMBOL NAME</span>
            <span>RESULT DATE</span>
          </div>
          <div className={`${styles.tbody}`}>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>1111</span>
              <span>INFRAIND</span>
              <span>2023-09-25</span>
            </div>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>1111</span>
              <span>INFRAIND</span>
              <span>2023-09-25</span>
            </div>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>1111</span>
              <span>INFRAIND</span>
              <span>2023-09-25</span>
            </div>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>1111</span>
              <span>INFRAIND</span>
              <span>2023-09-25</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.ResultCalender_wrapper} mt-4`}>
        <div className={`${styles.calenderTop} mb-2 d-flex align-items-center `}>
          <span className={`${styles.heading} fs-17 fs-md-20 fw-600 me-2`}>My Alerts</span>
          <div
            className={`${styles.rowNumbers} bg-dark text-white fs-12 d-flex justify-content-center align-items-center`}
          >
            2
          </div>
          <span className="ms-auto text-danger fs-14">Go To Alert</span>
        </div>

        <div className={`${styles.table}`}>
          <div className={`${styles.tableHeadings} fs-12 fs-md-14 mb-1 d-flex text-nowrap`}>
            <span>SYMBOLE NAME</span>
            <span>CREATED DATE</span>
            <span>ACTION</span>
          </div>
          <div className={`${styles.tbody}`}>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>MMTC</span>
              <span>2023-09-33</span>
              <span className="text-info">view</span>
            </div>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>MMTC</span>
              <span>2023-09-33</span>
              <span className="text-info">view</span>
            </div>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>MMTC</span>
              <span>2023-09-33</span>
              <span className="text-info">view</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.ResultCalender_wrapper} mt-4`}>
        <div className={`${styles.calenderTop} mb-2 d-flex align-items-center`}>
          <span className={`${styles.heading} fs-17 fs-md-20 fw-600 me-2`}>My Watchlist</span>
          <div
            className={`${styles.rowNumbers} bg-dark  text-white fs-12 d-flex justify-content-center align-items-center`}
          >
            2
          </div>
          <span className="ms-auto text-info fs-14">Go To Watchlist</span>
        </div>

        <div className={`${styles.table}`}>
          <div className={`${styles.tableHeadings} fs-12 fs-md-14 mb-1 d-flex text-nowrap`}>
            <span>NAME</span>
            <span>SYMBOLS</span>
          </div>
          <div className={`${styles.tbody}`}>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>Watch List 1</span>
              <span>RELIANCE, TCS, HDFCBANK</span>
            </div>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>Watch List 1</span>
              <span>RELIANCE, TCS, HDFCBANK</span>
            </div>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>Watch List 1</span>
              <span>RELIANCE, TCS, HDFCBANK</span>
            </div>
            <div className={`${styles.tableRow} fs-12 fs-md-14 d-flex`}>
              <span>Watch List 1</span>
              <span>RELIANCE, TCS, HDFCBANK</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResultCalender;
