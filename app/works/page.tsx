'use client';

import WorksContainer from '@/components/WorksContainer';
import ServicesLoadingWrapper from '@/components/ui/loading-wrapper';

const WorksPage = () => {
  return (
    <>
      <div className="sr-only">
        <h1>BA-BU Family Salon - Our Works & Gallery</h1>
        <p>Explore our portfolio of beautiful transformations and stunning beauty work.</p>
      </div>
      <ServicesLoadingWrapper minLoadingTime={2000}>
        <WorksContainer />
      </ServicesLoadingWrapper>
    </>
  );
};

export default WorksPage;