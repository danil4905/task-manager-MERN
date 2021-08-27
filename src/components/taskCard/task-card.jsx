import { chooseRole } from "../../utils/chooseRole";
import { chooseType } from "../../utils/chooseType";
import ButtonAction from "../button/buttonAction";
import classes from "./task-card.module.scss";
import videoIcon from "../../assets/video.svg";
import audioIcon from "../../assets/audio.svg";
import photoIcon from "../../assets/photo.svg";
import dateIcon from "../../assets/dateIcon.svg";

const typeIcon = (type) => {
  switch (type) {
    case "audio":
      return audioIcon;
    case "video":
      return videoIcon;
    case "photo":
      return photoIcon;
    default:
      return photoIcon;
  }
};

const TaskCard = (props) => {
  return (
    <section className={classes.wrap}>
      <div className={classes.type}>
        <img src={typeIcon(props.type)} alt="#" className={classes.typeImg} />
        <span className={classes.typeText + " itemContent__" + props.type}>
          {chooseType(props.type)}
        </span>
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.author}>{props.author}</div>
      <div className={classes.date}>
        <img src={dateIcon} alt="#" className={classes.dateIcon} />
        <span className={classes.dateText}>{props.date}</span>
      </div>
      <div className={`${classes.status} ${props.status}`}>
        {chooseRole(props.status)}
      </div>
      <div className={classes.controls}>
        <ButtonAction type="edit" />
        <ButtonAction type="delete" />
      </div>
    </section>
  );
};

export default TaskCard;
