/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'react-bootstrap';

const ResearchTool = () => {
  return (
    <div className="researchTool_wrapper text-white text-center p-4" style={{ background: '#0998dd' }}>
      <div className="top mb-4">
        <div className="heading fw-700 fs-20">Research Analysis Tools</div>
        <span className="fs-13">{`Wait, There's Even more for you!`}</span>
      </div>
      <Row className="justify-content-center">
        {[...'t'.repeat(5)].map((string, index) => {
          return (
            <Col xs={4} md={2} key={index}>
              <div className="content  d-flex flex-column align-items-center gap-1 mb-4">
                <div className="imgWrapper rounded-2 bg-light p-3">
                  <img src="/icons/triangle.png" alt="icon" />
                </div>
                <div className="fs-14 fw-400">Fibonacci Calculator</div>
              </div>
            </Col>
          );
        })}
      </Row>
      <style>
        {`
          .imgWrapper{
            width: fit-content;
          }
          .imgWrapper img{

              width:25px;
              height:25px;
          }
          `}
      </style>
    </div>
  );
};

export default ResearchTool;
