import React, { useRef, useState } from "react";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import s from "../../utils/Styles/Parametre/ProfileRestaurant.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurantInfoAction } from "../../redux/Restaurant/restaurant-slice";

import DefaultProfile from "../../utils/images/DefaultProfil.jpg";

function ProfileRestaurant() {
  const restaurantInfo = useSelector(
    (state) => state.RESTAURANT.restaurantInfo
  );

  console.log(restaurantInfo);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addRestaurantInfoAction({
        name,
        town,
        location,
        openingDays,
        openingTime,
        closingTime,
        phoneNumber,
        image,
      })
    );
  };

  const days = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
  ];

  const [name, setname] = useState();
  const [town, settown] = useState();
  const [location, setlocation] = useState();
  const [openingTime, setopeningTime] = useState();
  const [closingTime, setclosingTime] = useState();
  const [phoneNumber, setphoneNumber] = useState();

  const [image, setimage] = useState(restaurantInfo.image);

  const [checkedState, setcheckedState] = useState(
    new Array(days.length).fill(false)
  );

  const handleCheckBox = (id) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === id ? !item : item
    );

    setcheckedState(updatedCheckedState);
  };

  const openingDays = days.filter((item, id) => checkedState[id]);

  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleInputImage = (e) => {
    const file = e.target.files[0];
    setimage(URL.createObjectURL(file));
  };
  return (
    <>
      <h4>Profile Restaurant</h4>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={`form-row ${s.imgContainer}`}>
          <p>Photo Profile</p>
          {image ? (
            <img alt="logo restaurant" src={image} className={s.userImg} />
          ) : (
            <img
              alt="logo restaurant"
              src={DefaultProfile}
              className={s.userImg}
            />
          )}
          <button
            className={`btn ${s.btnPosition}`}
            type="button"
            onClick={handleImageClick}
          >
            Modifier
          </button>
          <input
            type="file"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleInputImage}
          />
        </div>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="ville" className="form-label">
            Ville
          </label>
          <input
            type="text"
            className="form-input"
            name="ville"
            id="ville"
            value={town}
            onChange={(e) => settown(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="localisation" className="form-label">
            Localisation
            <span style={{ fontSize: 12 }}>
              (ou se trouve le restaurant dans la ville)
            </span>
          </label>
          <input
            type="text"
            className="form-input"
            name="localisation"
            id="localisation"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="heure-ouverture" className="form-label">
            Heure Ouverture
          </label>
          <input
            type="time"
            className="form-input"
            name="heure-ouverture"
            id="heure-ouverture"
            value={openingTime}
            onChange={(e) => setopeningTime(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="heure-fermeture" className="form-label">
            Heure Fermeture
          </label>
          <input
            type="time"
            className="form-input"
            name="heure-fermeture"
            id="heure-fermeture"
            value={closingTime}
            onChange={(e) => setclosingTime(e.target.value)}
          />
        </div>

        <fieldset className={`form-row `}>
          <legend>Jours Ouvrable</legend>

          {days.map((item, id) => (
            <div key={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                checked={checkedState[id]}
                onChange={() => handleCheckBox(id)}
              />
              <label className={s.marginLabel} htmlFor={item}>
                {item}
              </label>
            </div>
          ))}
        </fieldset>
        <div className="form-row">
          <label htmlFor="numero" className="form-label">
            Numero de telephone
          </label>
          <input
            type="number"
            className="form-input"
            name="numero"
            id="numero"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
        </div>

        <button className="btn btn-block" type="submit">
          Valider
        </button>
      </form>
    </>
  );
}

export default ProfileRestaurant;

export const ProtectedProfileRestaurant = withAuthRequired(ProfileRestaurant);
