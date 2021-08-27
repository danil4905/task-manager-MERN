import { Link } from "react-router-dom";
import "./button.scss";
import { setEditUserId } from "../../redux/actions/newUser-actions";
import { useDispatch } from "react-redux";

const ButtonLink = (props) => {
  const dispatch = useDispatch();
  function setUserId() {
    dispatch(setEditUserId(props.data.id));
  }
  let edit = false;
  if (props.data) edit = true;
  return (
    <Link
      to={props.path}
      onClick={edit ? setUserId : ()=>{}}
      className={"default-btn " + props.type}
    >
      <div className="img-wrap">
        <img src={props.img} className={'img__'+props.type} alt="#" />
      </div>
      <span>{props.text}</span>
    </Link>
  );
};
export default ButtonLink;
