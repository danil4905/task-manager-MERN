import classes from "./arrowBack.module.scss";
import { NavLink, useHistory } from "react-router-dom";
import arrowBack from "../../assets/back.svg";

const ArrowBack = (props) => {
  let history = useHistory();
  return (
    <NavLink to="#" onClick={() => history.goBack(-1)} className={classes.back}>
      <img src={arrowBack} alt="back" />
    </NavLink>
  );
};

export default ArrowBack;
