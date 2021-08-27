import "./input.scss";
import searchIcon from "../../assets/search.svg";
import { changeInput } from "../../redux/actions/inputs-actions";
import { useDispatch } from "react-redux";
const SearchInput = (props) => {
  let input = props.value;
  const dispatch = useDispatch();
  const customStyles = {
    left: "5px",
  };
  return (
    <div className="input-search-wrapper">
      <input
        name={props.name}
        value={input}
        onChange={props.action? (e)=>dispatch(props.action(e.target.value)) : (e) => dispatch(changeInput(props.name, e.target.value))}
        type="search"
        placeholder={props.text}
        className={"Input input-search " + props.styles}
      />
      {input ? (
        <img src={searchIcon} alt="" style={customStyles} />
      ) : (
        <img src={searchIcon} alt="" />
      )}
    </div>
  );
};
export default SearchInput;
