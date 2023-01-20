import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryImageURL } from "../config.js";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [menu, setMenu] = useState({});
  const [menuItems, setMenuItem] = useState([]);

  const url2 =
    "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
    resId;

  const urlMenu =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9307735&lng=77.5838302&restaurantId=" +
    resId +
    "&submitAction=ENTER";

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(urlMenu);
    const json = await data.json();
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    setMenu(json?.data?.cards[0]?.card?.card?.info);
    setMenuItem(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  return (
    <div className="menu-container">
      <div>
        <h2>Menu:</h2>
        <img src={cloudinaryImageURL + menu.cloudinaryImageId} />
        <p>Id: {menu.id}</p>
        <h2>Name: {menu.name}</h2>
        <p>Area: {menu.areaName}</p>
        <p>Rating: {menu.avgRatingString} stars</p>
        <p>Cuisines: {menu?.cuisines?.join(", ")}</p>
        <p>City: {menu.city}</p>
      </div>
      <div>
        <ul>
          {menuItems?.map((item) => {
            // console.log(item.card.info.name);
            return (
              <>
                <li>
                  {item.card.info.name} - Rs {item.card.info.price / 100}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
