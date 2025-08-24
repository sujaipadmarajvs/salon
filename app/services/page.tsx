'use client';

import ServicesContainer from '@/components/ServicesContainer';
import ServicesLoadingWrapper from '@/components/ui/loading-wrapper';

const ServicesPage = () => {
  return (
    <>
      <div className="sr-only">
        <h1>BA-BU Family Salon - Our Services</h1>
        <p>Explore our comprehensive range of premium beauty and grooming services including wedding packages, hair care, and skin & body treatments.</p>
      </div>
      <ServicesLoadingWrapper minLoadingTime={2000}>
        <ServicesContainer />
      </ServicesLoadingWrapper>
    </>
  );
};

export default ServicesPage;
