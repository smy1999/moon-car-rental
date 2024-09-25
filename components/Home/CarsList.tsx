import React, {useEffect, useState} from 'react';
import CarCard from "@/components/Home/CarCard";
import BookingModal from "@/components/CarBooking/BookingModal";
import CarCardSkeleton from "@/components/Home/CarCardSkeleton";

const CarsList = (props: any) => {

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (props.carsList) {
      setIsLoaded(false)
    } else {
      setIsLoaded(true)
    }
  }, [props.carsList]);


  const [selectedCar, setSelectedCar] = useState<any>([])

  return (
    <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
      {!isLoaded && props.carsList.map((car: any, index: number) => (
        <div key={index}
          onClick={() => {
            (window as any).bookModal.showModal();
            setSelectedCar(car)
          }}
        >
          <CarCard car={car}/>
        </div>
      ))}
      {isLoaded ? [1, 2, 3, 4, 5, 6, 7, 8].map(() => <CarCardSkeleton/>) : null}

      <dialog id="bookModal" className="modal">
        <BookingModal car={selectedCar}/>
      </dialog>
    </div>
  );
};

export default CarsList;