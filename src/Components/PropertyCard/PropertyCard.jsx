import React from "react";
import styles from "./PropertyCard.module.css";
import houseImage from "../../assets/house.svg";
import personImage from "../../assets/person.svg";
import starImage from "../../assets/star.svg";

function PropertyCard({
  isSuperhost,
  image,
  title,
  description,
  noOfBedrooms,
  noOfGuests,
  price,
  rating,
  location,
}) {
  return (
    <>
      <div className={styles.Card}>
        <div className={styles.imageContainer}>
          <img src={image} alt="Property image" className={styles.heroImage} />
          <div className={styles.badge}>
            {isSuperhost && (
              <span className={styles.superhost}>
                <p>Superhost</p>
                <img
                  className={styles.smallStar}
                  src={starImage}
                  alt="Superhost star"
                />
              </span>
            )}
          </div>
        </div>

        <div className={styles.cardContent}>
          <h5>{title}</h5>
          <p>{description}</p>
          <span className={styles.iconContainer}>
            <span>
              <img src={houseImage} alt="Bedrooms" /> <p>{noOfBedrooms} bedroom</p>
            </span>
            <span>
              <img src={personImage} alt="Guests" /> <p>{noOfGuests} guests</p>
            </span>
          </span>
          <hr></hr>
          <div className={styles.infoBar}>
            <div>
              ${price}
              <span>/night</span>
            </div>
            <div className={styles.rating}>
              <img src={starImage} alt="star" className={styles.ratingStar} />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyCard;
