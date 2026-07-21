import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Skiper28 } from '../components/v1/skiper28';

const DemoPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-24 bg-[#0A0A0A]">
      <Helmet>
        <title>Demo | Interactive Specimen</title>
        <meta name="description" content="View the interactive digital design system and real-time visual canvas by Harsha Bacham." />
      </Helmet>
      <Skiper28 />
    </main>
  );
};

export default DemoPage;
