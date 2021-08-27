import classes from "./taskFilter.module.scss";
import Button from "../button/buttonFilter";
import SearchInput from "../input/searchInput";
import DateInput from "../input/dateInput";
import audioIcon from "../../assets/audio.svg";
import videoIcon from "../../assets/video.svg";
import photoIcon from "../../assets/photo.svg";
import Select from "react-select";


const TaskFilter = (props) => {
  let actions = props.actions;
  return (
    <div className={props.styles!=='tasks'?classes.filter:classes.tasks}>
      <SearchInput
        name="searchInputMainPage"
        text="Введите название задачи или имя ответственного"
        styles="big"
        value={props.search}
        action={actions?props.actions[3]:''}
      />
      {!props.options?
      ''
      : <Select 
      options={props.options} 
      placeholder='Выберите статус' 
      onChange={(e) => props.dispatch(props.actions[5](e.value))}
      styles={props.selectStyle? props.selectStyle:''} />}
      <DateInput className={classes.small}
        text="Укажите дату"
        styles={props.dateStyle?props.dateStyle:"big" }
        value={props.date}
        name="dateInputMainPage"
        action={actions?props.actions[4]:''}
      />
      
      <div className={classes.type}>
        <Button
          type="video"
          text="Видео"
          action={props.action}
          toggle={actions? props.actions[0]:''}
          img={videoIcon}
          value={props.video}
        />
        <Button
          type="photo"
          text="Фото"
          action={props.action}
          toggle={actions?props.actions[1]:''}
          img={photoIcon}
          value={props.photo}
        />
        <Button
          type="audio"
          text="Aудио"
          action={props.action}
          toggle={actions?props.actions[2]:''}
          img={audioIcon}
          value={props.audio}
        />
      </div>
    </div>
  );
};
export default TaskFilter;
