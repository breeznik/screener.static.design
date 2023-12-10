/* eslint-disable @next/next/no-img-element */
import styles from '@/scss/components/_home.module.scss';

const GiftNifyAndGreetings = () => {
  return (
    <div className={`${styles.giftNifty_wrapper}  d-flex flex-md-column gap-3`}>
      <div
        className={`${styles.giftNifty} d-flex flex-column flex-md-row p-2 px-3 px-md-0 rounded-3 position-relative align-items-md-center gap-md-4`}
      >
        <span className={`${styles.heading} fw-500 fs-15 ms-md-2`}>GIFT NIFTY</span>
        <span className={`${styles.price} fs-17 fw-600`}>19642.5</span>
        <div className={`${styles.priceChange} text-green mb-2 mb-md-0 fs-14`}>
          <img className={`${styles.d} me-1`} src="/icons/arrow-up.png" alt="icon" />
          {`${59.5} (${0.3}%)`}
        </div>
        <div className={`${styles.highmin} d-flex  fs-11 fw-500`}>
          <div className={`${styles.high} me-4 d-md-flex gap-md-2`}>
            <span className={`${styles.heading}`}>High</span>
            <div className={`${styles.price} text-green`}>19222.5</div>
          </div>
          <div className={`${styles.low} ms-auto d-md-flex gap-md-2`}>
            <span className={`${styles.heading}`}>Low</span>
            <div className={`${styles.price}`}>19222.5</div>
          </div>
        </div>

        <div className={`${styles.cardBottom} fs-12 fw-400 text-center mt-2 mt-md-0 ms-md-auto`}>
          <a className="me-3 d-none d-md-inline" href="#">
            <img className="me-2" src="/icons/refreshing.png" alt="icon" />
            Refresh
          </a>
          <a className="me-md-3" href="#">
            Gloabal Market
          </a>
        </div>
        <img
          className={`${styles.refreshIcon} d-md-none position-absolute`}
          src="/icons/refreshing-black.png"
          alt="icon"
        />
      </div>
      <div className={`${styles.greetings} d-flex flex-column flex-md-row align-items-md-center`}>
        <div>
          <div className={`${styles.head} fs-18 fw-500`}>
            Hello
            <span className={`${styles.username} `}> Nikhil Rao Geekologix</span>,
          </div>

          <p className={`${styles.greeting} fs-10 fs-md-13`}>{`So glad you're at NiftyTrader!
Get access to our unique and
state of the art products
from here.`}</p>
        </div>
        <div className={`${styles.buttons} d-flex gap-2 fs-10 fs-md-13 ms-md-auto text-nowrap`}>
          <button className={`${styles.connectBroker} rounded border-0 py-1`}>Connect Broker</button>
          <button className={`${styles.goToProfile} rounded py-1 bg-white`}> Go To Profile</button>
        </div>
      </div>
    </div>
  );
};

export default GiftNifyAndGreetings;
