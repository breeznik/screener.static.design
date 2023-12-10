'use client';
import { useState } from 'react';
import AutoSlider from './AutoSlider';
import { Container } from 'react-bootstrap';
import StockCards, { StocksBottomOptions } from './StockCards';
import Dashboard from './Dashboard';
import BrokersCards from './BrokersCards';
import GiftNifyAndGreetings from './GiftNify';
import ResultCalender from './ResultCalender';
import Blog from './Blog';
import MyScreeners from './MyScreeners';
import DownloadMobileApp from './DownloadMobileApp';
import HelpedUs from './HelpedUs';
import RightBrokerForm from './RightBrokerForm';
import ResearchTool from './ResearchTool';
import WatchListChart from './WatchListChart';

const Home = () => {
  const [stockCardOptions, setStockCardOptions] = useState(null);
  return (
    <div className="home_wrapper overflow-x-hidden">
      <AutoSlider />
      <Container fluid={'md'} className="mb-5 mt-3">
        <StockCards setStockCardOptions={setStockCardOptions} stockCardOptions={stockCardOptions} />
      </Container>
      <Dashboard />
      <Container className="p-md-0 d-flex flex-column gap-5 my-5">
        <BrokersCards />
        <GiftNifyAndGreetings />
        <ResultCalender />
        <MyScreeners />
        <Blog />
        <WatchListChart />
        <ResearchTool />
        <RightBrokerForm />
      </Container>
      <Container className="p-0 d-flex flex-column gap-5">
        <DownloadMobileApp />
        <HelpedUs />
      </Container>
      <StocksBottomOptions stockCardOptions={stockCardOptions} setStockCardOptions={setStockCardOptions} />
    </div>
  );
};

export default Home;
