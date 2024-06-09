import React, { useState } from "react";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import s from "../../utils/Styles/Parametre/ProfileAdministrateur.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAdminInfoAction } from "../../redux/Users/auth-slice";

const ProfileAdministrateur = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAdminInfoAction(user));
    navigate("/");
  };

  const userInfo = useSelector((state) => state.AUTH.adminInfo);

  const [user, setuser] = useState({
    name: userInfo.name ? userInfo.name : "",
    email: userInfo.email ? userInfo.email : "",
    password: userInfo.password ? userInfo.password : "",
  });

  const handleInput = (e) => {
    switch (e.target.name) {
      case "name":
        setuser((prev) => ({
          ...prev,
          name: e.target.value,
        }));
        break;
      case "email":
        setuser((prev) => ({
          ...prev,
          email: e.target.value,
        }));
        break;
      case "password":
        setuser((prev) => ({
          ...prev,
          password: e.target.value,
        }));
        break;

      default:
        break;
    }
  };
  return (
    <>
      <h4>Profile Administrateur</h4>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            value={user.name}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            value={user.email}
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="password" className="form-label">
            mot de passe
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            id="password"
            value={user.password}
            onChange={(e) => handleInput(e)}
          />
        </div>

        <button className="btn btn-block" type="submit">
          Valider
        </button>
      </form>
    </>
  );
};

export default ProfileAdministrateur;

export const ProtectedProfileAdministrateur = withAuthRequired(
  ProfileAdministrateur
);
