import "./input.scss";
import Select, { components } from "react-select";
import DropDownIcon from "../../assets/dropDown.svg";


const dropDownIndicator = (props
  ) => { 
  return (
    <components.DropdownIndicator {...props}>
        {DropDownIcon}
    </components.DropdownIndicator>
  );
};
const Selectinput = (props) => {
  const styles = {
    background: "black",
  };
  return (
    <Select
      options={props.options}
      dropdownIndicator={styles}
      className="react-select-container"
      classNamePrefix="react-select"
      placeholder={props.text}
      components={{dropDownIndicator} }
    />
  );
};
export default Selectinput;
