import { cloudinaryImageURL } from "../config.js";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, id, area, avgRating, cuisines } = props;
  return (
    <div className="single-card-cotainer">
      <img src={cloudinaryImageURL + cloudinaryImageId} />
      <h4>Id:{id}</h4>
      <h3>{name}</h3>
      <h4>
        {area} | {avgRating} star
      </h4>
      <p>{cuisines.join(". ")}</p>
    </div>
  );
};

export default RestaurantCard;
