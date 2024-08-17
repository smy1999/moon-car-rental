import React, {useEffect, useState} from 'react';

const CarsFiltersOption = ({carsList, setBrand}: any) => {

  useEffect(() => {
    if (carsList) {
      filterCarList()
    }
  }, [carsList])

  const [brandList, setBrandList] = useState<any>([]);

  const BrandSet = new Set();

  const filterCarList = () => {
    carsList.forEach((element:any) => {
      BrandSet.add(element.carBrand)
    })
    setBrandList(Array.from(BrandSet))
  }

  return (
    <div className={'mt-10 flex items-center justify-between'}>
      <div>
        <h2 className={'text-[30px] font-bold'}>
          Cars Catalog
        </h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className={'flex gap-5'}>
        <select className="select select-bordered w-full max-w-xs ">
          <option disabled selected>Price</option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select
          className="select select-bordered md:block w-full max-w-xs hidden"
          onChange={(e) => {
            setBrand(e.target.value)
          }}
        >
          <option disabled selected>Manufacture</option>
          {brandList && brandList.map((brand: string, index: number) => (
              <option key={index}>{brand}</option>
            )
          )}
        </select>
      </div>
    </div>
  );
};

export default CarsFiltersOption;