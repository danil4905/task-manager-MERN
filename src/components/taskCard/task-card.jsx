import { chooseRole } from "../../utils/chooseRole";
import { chooseType } from "../../utils/chooseType";
import ButtonLink from "../button/buttonLink";
import classes from "./task-card.module.scss";
import videoIcon from "../../assets/video.svg";
import audioIcon from "../../assets/audio.svg";
import photoIcon from "../../assets/photo.svg";
import dateIcon from "../../assets/dateIcon.svg";
import ediIcon from "../../assets/edit-iconBlue.svg";
import deleteicon from "../../assets/delete-icon.svg";
import { Link } from "react-router-dom";
import AlertAccept from "../alert/alertAccept";
import {useDispatch} from 'react-redux';
import {openAlert} from '../../redux/actions/alert-actions';

export const typeIcon = (type) => {
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
  const dispatch = useDispatch()
  return (
    <div className={classes.wrap}>
    <Link to={`/task/${props.id}`} className={classes.wrapLink+' '+ props.role}>
      <div className={classes.type}>
        <img src={typeIcon(props.type)} alt="#" className={classes.typeImg} />
        <span className={classes.typeText + " itemContent__" + props.type}>
          {chooseType(props.type)}
        </span>
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.author}>{props.author.name}</div>
      <div className={classes.date}>
        <img src={dateIcon} alt="#" className={classes.dateIcon} />
        <span className={classes.dateText}>{new Date(props.date).toLocaleDateString().split("/").join(".") }</span>
      </div>
      <div className={`${classes.status} ${props.status}`}>
        {chooseRole(props.status)}
      </div>
      </Link>
      {props.role === 'content-maker'? '':
      <div className={classes.controls}>
      <ButtonLink
          type="editTask"
          path={"editTask/"+props.id}
          data={props}
          edit={true}
          img={ediIcon}
        />
        <button className={'default-btn deleteTask'}> <img src={deleteicon} alt="delete" onClick={() => dispatch(openAlert('isOpenedTask'))} /></button>
      </div>
      }
      <AlertAccept type='task' id={props.id} />
    </div>
  );
};

export default TaskCard;
