import React, {useEffect, useState} from 'react';
import {getLocationList} from "@/services";

const Form = () => {

  useEffect(() => {
    getLocationLists_()
  }, []);

  const [locations, setLocations] = useState([])

  const getLocationLists_ = async () => {
    const result: any = await getLocationList();
    setLocations(result?.storeLocations);
  }


  return (
    <div className={'pt-2'}>

      <div className={'flex'}>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Pick Up Location</label>
          <select className="select select-bordered w-full max-w-lg">
            <option disabled selected>Select Pick Up Location</option>
            {locations && locations.map((location: any, index: number) => (
              <option key={index}>{location.address}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={'flex gap-5'}>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Pick Up Date</label>
          <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-lg"/>
        </div>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Drop off Date</label>
          <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-lg"/>
        </div>
      </div>

      <div className={'flex gap-5'}>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Pick Up Time</label>
          <input type="time" placeholder="Type here" className="input input-bordered w-full max-w-lg"/>
        </div>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Drop off Time</label>
          <input type="time" placeholder="Type here" className="input input-bordered w-full max-w-lg"/>
        </div>
      </div>

      <div className={'flex'}>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Contact Number</label>
          <input type="text" placeholder="+1 (123) 456-7777" className="input input-bordered w-full max-w-lg"/>
        </div>
      </div>

    </div>
  );
};

export default Form;