import React, {useEffect, useState} from 'react';

const CarsFiltersOption = ({carsList, setBrand, orderCarList}: any) => {

  useEffect(() => {
    if (carsList) {
      filterCarList()
    }
  }, [carsList])

  const [brandList, setBrandList] = useState<any>([]);
  const [priceOrder, setPriceOrder] = useState('Price');
  const [selectedBrand, setSelectedBrand] = useState('Manufacture');

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
        <select
          className="select select-bordered w-full max-w-xs"
          value={priceOrder}
          onChange={(e) => {
            setPriceOrder(e.target.value);
            orderCarList(e.target.value);
          }}
        >
          <option value="Price" disabled>Price</option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className="select select-bordered md:block w-full max-w-xs hidden"
          value={selectedBrand}
          onChange={(e) => {
            setSelectedBrand(e.target.value);
            setBrand(e.target.value);
          }}
        >
          <option value="Manufacture" disabled>Manufacture</option>
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