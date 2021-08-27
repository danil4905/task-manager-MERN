import { useDispatch } from "react-redux";
import { setCurrentType } from "../../redux/actions/usersPage-actions";
import { chooseRole } from "../../utils/chooseRole";

const ButtonSort = (props) => {
  const dispatch = useDispatch();
  function addActiveClass() {
    if (props.id === props.active) {
      return "activeButtonSort";
    } else return "";
  }
  return (
    <button
      className={"default-btn buttonSort " + addActiveClass()}
      id={props.id}
      onClick={() => dispatch(setCurrentType(props.id))}
    >
      {chooseRole(props.id)}
    </button>
  );
};
export default ButtonSort;
