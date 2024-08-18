import React, {useEffect, useState} from 'react';
import {createBooking, getLocationList} from "@/services";
import {useUser} from '@clerk/clerk-react';

const Form = ({car}: any) => {

  useEffect(() => {
    if (car) {
      setFormValue({
        ...formValue,
        carId: car.id,
      })
    }
  }, [car]);

  useEffect(() => {
    getLocationLists_()
  }, []);

  // todo update user info
  // useEffect(() => {
  //   console.log(0, isSignedIn, isLoaded)
  //   if (isSignedIn && isLoaded) {
  //     setFormValue({
  //       ...formValue,
  //       email: user.primaryEmailAddress?.emailAddress!
  //     })
  //   }
  // }, [])
  //
  // const {isSignedIn, user, isLoaded} = useUser()

  const [locations, setLocations] = useState([])

  const getLocationLists_ = async () => {
    const result: any = await getLocationList();
    setLocations(result?.storeLocations);
  }

  const [formValue, setFormValue] = useState({
    location: '',
    pickUpDate: '',
    pickUpTime: '',
    dropOffDate: '',
    dropOffTime: '',
    contactNumber: '',
    userName: 'Meyer',
    email: 'xxx@yy.zzz',
    carId: ''
  });

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    })
  };

  const handleSubmit = async () => {
    console.log(formValue)
    const response = await createBooking(formValue);
    console.log(9, response)
  };

  return (
    <div className={'pt-2'}>

      <div className={'flex'}>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Pick Up Location</label>
          <select
            className="select select-bordered w-full max-w-lg"
            name={'location'}
            onChange={handleChange}
          >
            <option disabled selected>Select Pick Up Location</option>
            {locations && locations.map((location: any, index: number) => (
              <option
                key={index}
              >
                {location.address}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={'flex gap-5'}>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Pick Up Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            name={'pickUpDate'}
            onChange={handleChange}
          />
        </div>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Drop off Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            name={'dropOffDate'}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={'flex gap-5'}>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Pick Up Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            name={'pickUpTime'}
            onChange={handleChange}
          />
        </div>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Drop off Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            name={'dropOffTime'}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={'flex'}>
        <div className={'flex flex-col w-full mb-5'}>
          <label className={'text-gray-400'}>Contact Number</label>
          <input
            type="text"
            placeholder="+1 (123) 456-7777"
            className="input input-bordered w-full max-w-lg"
            name={'contactNumber'}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="modal-action">
        <button className="btn">Close</button>
        <button
          className="btn text-white bg-blue-500 hover:bg-blue-800"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;