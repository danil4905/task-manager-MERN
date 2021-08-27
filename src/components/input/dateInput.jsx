import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "./input.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { changeInput } from "../../redux/actions/inputs-actions";

registerLocale("ru", ru);

const DateInput = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <DatePicker
        id="dateCalendar"
        dateFormat="dd.MM.yyyy"
        selected={props.value}
        locale={ru}
        onChange={props.action?(e) => dispatch(props.action(e)) : (ev) => dispatch(changeInput(props.name, ev))}
        wrapperClassName={props.styles}
        placeholderText={props.text}
        autoComplete="false"
      />
    </div>
  );
};
export default DateInput;
