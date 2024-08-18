import React from 'react';
import CarCard from "@/components/Home/CarCard";
import Form from "@/components/CarBooking/Form";

const BookingModal = ({car}: any) => {

  return (
    <form method={'dialog'} className={'modal-box w-11/12 max-w-5xl'}>
      <div className={'border-b-[1px] pb-2'}>
        <h3 className={'text-[30px] font-light text-gray-400'}>
          Rent A Car Now!
        </h3>
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2'}>
        <div>
          <CarCard car={car}/>
        </div>
        <div>
          <Form />
        </div>
      </div>

      <div className="modal-action">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </div>
    </form>

  );
};

export default BookingModal;