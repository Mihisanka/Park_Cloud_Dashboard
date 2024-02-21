
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
import { useEffect, useState } from "react";
import "../styles/AllParkings.css";
import carData from "../assets/dummy-data/ParkingAll.js";
import CarItem from "../components/UI/CarItem";

import io from "socket.io-client";
import { databaseRef } from "../firebase-config.js";
import { getDatabase, ref, get, child } from "firebase/database";

const socket = io.connect(process.env.REACT_APP_SERVER_URL);

const Bookings = () => {

  const [messages, setMessages] = useState([]);
  const [slots, setSlots] = useState([
    { id: "PLT0001", status: false },
    { id: "PLT0002", status: false },

  ]);
  const dbRef = ref(getDatabase());
  get(child(dbRef, `Slot_available/availability`)).then((snapshot) => {
    if (snapshot.exists()) {


      // Corrected usage of setSlots to update only the first slot
      setSlots(prevSlots => [
        { ...prevSlots[0], status: snapshot.val() },
        ...prevSlots.slice(1) // Keep the rest of the slots unchanged
      ]);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });


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
