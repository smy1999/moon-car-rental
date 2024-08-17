"use client"

import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import {useEffect, useState} from "react";
import {getCarsList} from "@/services";
import CarsList from "@/components/Home/CarsList";

export default function Home() {

  const [carsList, setCarsList] = useState<any>([])

  useEffect(() => {
    getCarsList_()
  }, [])

  const getCarsList_ = async () => {
    const result:any = await getCarsList();
    console.log(1, result?.carLists)
    setCarsList(result?.carLists)
  }

  return (
    <div className={"p-5 sm:px-10 md:px-20"}>
      <Hero/>
      <SearchInput/>
      <CarsFiltersOption/>
      <CarsList carsList={carsList}/>
    </div>
  );
}
