"use client"

import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import {useEffect, useState} from "react";
import {getCarsList} from "@/services";
import CarsList from "@/components/Home/CarsList";
import {BookCreatedFlagContext} from "@/context/BookCreatedFlagContext";
import ToastMessage from "@/components/Home/toastMessage";

export default function Home() {

  const [carsList, setCarsList] = useState<any>([])
  const [carsOrgList, setCarsOrgList] = useState<any>([])
  const [showToastMessage, setShowToastMessage] = useState<boolean>(false)

  useEffect(() => {
    getCarsList_()
  }, [])

  useEffect(() => {
    if (showToastMessage) {
      setTimeout(() => {
        setShowToastMessage(false)
      }, 2000)
    }
  }, [showToastMessage])

  const getCarsList_ = async () => {
    const result:any = await getCarsList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists)
  }

  const filterCarsList = (brand:string) => {
    const filterList = carsOrgList.filter((item: any) => item.carBrand == brand);
    setCarsList(filterList)
  }

  const orderCarList = (order:any) => {
    const orderList = [...carsList].sort((x, y) =>
      order == -1 ? x.price - y.price : y.price - x.price);
    setCarsList(orderList);
  }

  return (
    <div className={"p-5 sm:px-10 md:px-20"}>
      <BookCreatedFlagContext.Provider value={{showToastMessage, setShowToastMessage}}>
        <Hero/>
        <SearchInput/>
        <CarsFiltersOption
          carsList={carsOrgList}
          setBrand={(value:string) => filterCarsList(value)}
          orderCarList={(value:string)=> orderCarList(value)}
        />
        <CarsList carsList={carsList}/>
        {showToastMessage ? <ToastMessage msg={'Booking created successfully.'}/> : null}
      </BookCreatedFlagContext.Provider>
    </div>
  );
}
