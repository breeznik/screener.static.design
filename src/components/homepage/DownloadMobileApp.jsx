import styles from '@/scss/components/_home.module.scss';

const DownloadMobileApp = () => {
  return (
    <div className={`${styles.download_wrapper}`}>
      <div
        className={`${styles.downloadMobileApp} d-flex flex-column flex-lg-row justify-content-center align-items-center text-center py-5 py-lg-3 px-4`}
      >
        <div>
          <div className={`${styles.top} mb-4`}>
            <div className={`${styles.heading} fw-700 fs-20 mb-2`}>Download Our Mobile App</div>
            <div className="headline text-muted fs-13">
              NiftyTrader Stock Screener, NSE BSE MarketPulse, Stock Analysis
            </div>
          </div>
          <div className={`${styles.mid}`}>
            <div className={`${styles.links} d-flex align-items-center mb-4`}>
              <div className={`${styles.downloadLinks} w-50 pe-3 border-end d-flex  flex-column align-items-center`}>
                <div className={`${styles.imageWrapper} mb-3`}>
                  <img src="icons/google_play.png" alt="img" />
                </div>
                <div className={`${styles.imageWrapper}`}>
                  <img src="icons/appstore2.png" alt="img" />
                </div>
              </div>
              <div className={`${styles.scanner} w-50`}>
                <img src="/icons/qrCode.png" alt="" />
              </div>
            </div>
            <div className={`${styles.downloadState} fw-800`}>
              <img src="/icons/medal.png" alt="icon" />
              OVER 500K+ DOWNLOADS IN INDIA
            </div>
          </div>
        </div>
        <div className={`${styles.bottom} position-relative`}>
          <img src="/icons/mobile-app.png" alt="img" />
          <div
            className="text-white bomb-radius rounded-circle 
          position-absolute top-50 start-50 translate-middle"
          >
            <img src="/icons/play.png " alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadMobileApp;
