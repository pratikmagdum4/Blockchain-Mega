import React, { useState, useEffect } from 'react';

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';

const theme = {
  colors: {
    50: '#F6F5F8',
    100: '#CAC3D4',
    200: '#9E92B0',
    300: '#71608D',
    400: '#4A356A',
    500: '#412E5D',
    600: '#372850',
    700: '#2E2142',
    800: '#251A35',
    900: '#1B1427',
    950: '#120D1A'
  }
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className="bg-[#1B1427] min-h-screen flex justify-center items-center p-4">
      <DisplayCampaigns 
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
        customClass="text-[#F6F5F8]" // Apply consistent text color
      />
    </div>
  );
}

export default Home;
