import React, { useEffect, useState } from "react";
import styles from "./PropertyFilter.module.css";
import axios from "axios";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import PropertyCard from "../PropertyCard/PropertyCard";

function PropertyFilter() {
  const [data, setData] = useState([]);
  const [isOn, setIsOn] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState("All Stays");

  const locations = ["All Stays", "Norway", "Finland", "Sweden", "Switzerland"];

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json"
        );
        console.log(response.data);
        setData(response.data);
        setFilterData(response.data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProperties = (location, superhostStatus) => {
    let filtered = data;

    if (location !== "All Stays") {
      filtered = filtered.filter((item) => item.location === location);
    }

    if (superhostStatus) {
      filtered = filtered.filter((item) => item.superhost);
    }

    setFilterData(filtered);
  };
  const handleLocationChange = (newLocation) => {
    setSelected(newLocation);
    filteredProperties(newLocation, isOn);
  };

  const handleSuperhostChange = (newIsOn) => {
    setIsOn(newIsOn);
    filteredProperties(selected, newIsOn);
  };

  return (
    <>
      <div className={styles.filterContainer}>
        <ul className={styles.listContainer}>
          {locations.map((location, index) => (
            <li
              key={index}
              onClick={() => handleLocationChange(location)}
              className={
                selected === location ? styles.active : styles.defaultActive
              }
            >
              {location}
            </li>
          ))}
        </ul>
        <div className={styles.toggleContainer}>
          <ToggleSwitch
            checked={isOn}
            onChange={()=>handleSuperhostChange(!isOn)}
          />
          <p>Superhost</p>
        </div>
        <div>
          <select className={styles.dropdown}>
            <option value="Property Type">Property Type</option>
          </select>
        </div>
      </div>
      <div className={styles.superCardContainer}>
        <h2 className={styles.staysheading}>Over 200 stays</h2>
        <div className={styles.cardContainer}>
          {filterData.map((item) => (
            <div key={item.id}>
              <PropertyCard
                isSuperhost={item.superhost}
                image={item.image}
                title={item.title}
                description={item.description}
                noOfBedrooms={item.capacity.bedroom}
                noOfGuests={item.capacity.people}
                price={item.price}
                rating={item.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PropertyFilter;
