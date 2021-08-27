import classes from "./comment.module.scss";
import { useSelector } from "react-redux";

const Comment = (props) => {
  let name;
  if (useSelector((state) => state.auth.user.name) === props.name) name = "Вы";
  else name = props.name;
  return (
    <li className={classes.card}>
      <img src={props.img} alt="ava" />
      <div className={classes.info}>
        <div className={classes.topInfo}>
          <span className={classes.name}>{name}</span>
          <span className={classes.dateTime}>
              <span>{new Date(props.date).toLocaleTimeString().slice(0,-3)}</span>
              <span>{new Date(props.date).toLocaleDateString()}</span>
          </span>
        </div>
        <p className={classes.message}>{props.message}</p>
      </div>
    </li>
  );
};
export default Comment;
