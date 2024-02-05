
/*
<div className="filter__widget-wrapper">
<div className="filter__widget-01">
  <select>
    <option value="New">New</option>
    <option value="Popular">Popular</option>
    <option value="Upcoming">Upcoming</option>
  </select>
</div>

<div className="filter__widget-01">
  <select>
    <option value="toyota">Toyota</option>
    <option value="bmw">Bmw</option>
    <option value="audi">Audi</option>
  </select>
</div>
</div>*/
import React from "react";
import "../styles/AllParkings.css";
import carData from "../assets/dummy-data/ParkingAll.js";
import CarItem from "../components/UI/CarItem";

const Bookings = () => {
  return (
    <div className="AllParkings">
      <div className="AllParkings__wrapper">
        <h2 className="AllParkings__title">All Parkings</h2>

        <div className="booking__car-list">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
