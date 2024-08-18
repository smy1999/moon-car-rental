import React, {useState} from 'react';
import CarCard from "@/components/Home/CarCard";
import BookingModal from "@/components/CarBooking/BookingModal";

const CarsList = (props: any) => {

  const [selectedCar, setSelectedCar] = useState<any>([])

  return (
    <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
      {props.carsList.map((car: any, index: number) => (
        // <div onClick={()=>document.getElementById('bookModal').showModal()}>
        <div
          onClick={() => {
            (window as any).bookModal.showModal();
            setSelectedCar(car)
          }}
        >
          <CarCard car={car}/>
        </div>
      ))}

      <dialog id="bookModal" className="modal">
        <BookingModal car={selectedCar}/>
      </dialog>
    </div>
  );
};

export default CarsList;