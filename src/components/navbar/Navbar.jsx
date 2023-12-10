'use client';
import styles from '@/scss/components/_navbar.module.scss';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Navbar = () => {
  const [optionAnimation, setOptionAnimation] = useState(false);
  const [searchEnable, setSearchEnable] = useState(false);
  return (
    <div className={`${styles.navbar_wrapper} border py-3`}>
      <Container className={`${styles.navbar} d-flex`}>
        <div
          className={`${styles.nav_left}  gap-2 gap-md-4 
          ${!searchEnable ? 'd-flex' : 'd-none d-md-flex'}
           d-flex
          `}
        >
          <div
            onClick={() => setOptionAnimation((prev) => !prev)}
            className={`${styles.sidePanelToggle} ${optionAnimation && styles.click_effect} bg-dark p-1 cursor-pointer`}
          >
            <img src="/icons/blur.png" alt="icon" />
          </div>
          <span className={`${styles.navlogo} fs-20 fs-md-25 fw-300`}>
            <span className="fw-500">Logo</span>
            Trader
          </span>
        </div>
        <div
          className={`${styles.nav_right}
        d-flex gap-3 ms-auto`}
        >
          <div className={`${styles.search} rounded-pill p-2 d-flex`}>
            <input
              className={`ms-2 me-2 border-0 fs-14 fw-300  ${searchEnable ? 'd-inline' : 'd-none d-md-inline'}`}
              type="text"
            />
            <div onClick={() => setSearchEnable((prev) => !prev)} className={`${styles.searchIcon} cursor-pointer`}>
              <img src="/icons/search.png" alt="icon" />
            </div>
          </div>
          <div className={`${styles.profile} d-flex rounded-pill gap-3`}>
            <div className={`${styles.notification} px-2 py-2 position-relative cursor-pointer`}>
              <img src="/icons/bell.png" alt="icon" />
              <span className={`${styles.notifcationActive} position-absolute rounded`}></span>
            </div>
            <div className={`${styles.profileIcon} me-1 cursor-pointer`}>
              <img src="/icons/user.png" alt="icon" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
