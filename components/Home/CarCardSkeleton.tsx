import React from 'react';

const CarCardSkeleton = () => {
  return (
    <div className={"rounded-md p-4 max-w-sm w-full mx-auto"}>
      <div className={'animate-pulse flex space-x-4'}>
        <div className={'rounded-lg bg-slate-200 h-[330px] w-[220px]'}>
        </div>
      </div>
    </div>
  );
};

export default CarCardSkeleton;