/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '@/scss/components/_home.module.scss';

const Blog = () => {
  return (
    <div className={`${styles.blog_wrapper}`}>
      <div className={`${styles.top} d-flex flex-column mb-3`}>
        <span className={`${styles.heading} fw-600 fs-18`}>Blog</span>
        <span className="text-secondary">Daily Insight from NiftyTrader</span>
      </div>
      <Row className="flex-nowrap flex-lg-wrap overflow-x-scroll py-2">
        {[...'t'.repeat(5)].map((string, index) => {
          return (
            <Col className={`${styles.col} mb-lg-4`} lg={6} key={index}>
              <BlogCard />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Blog;

const BlogCard = () => {
  return (
    <div className={`${styles.blog_card} d-md-flex align-items-center gap-md-2  rounded overflow-hidden`}>
      <div className={`${styles.cardhead} mb-3 mb-md-0`}>
        <img src="/icons/sample.png" alt="icon" />
      </div>
      <div className={`${styles.cardBody} d-flex flex-column pb-2 px-3`}>
        <span className={`${styles.cardHeading} fs-14 fw-600 mb-2`}>Nifty Takes the Lead as Markets Keep Climbing</span>
        <span className={`${styles.date} fs-14 mb-2`}>23 Sep, 2023</span>
        <p className="fs-12 overflow-hidden text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem rerum officia natus sit delectus
          expedita eveniet quia deleniti aut similique quisquam, adipisci, commodi voluptates esse incidunt
          necessitatibus labore quaerat nemo!
        </p>
        <a className={`${styles.readMore} fs-14 text-info`}>Read More</a>
      </div>
    </div>
  );
};
