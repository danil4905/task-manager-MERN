import classes from "./contentItem.module.scss";
import videoIcon from "../../assets/video.svg";
import audioIcon from "../../assets/audio.svg";
import photoIcon from "../../assets/photo.svg";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/mainPage-actions";
import { chooseType } from "../../utils/chooseType";

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

const ContentItem = (props) => {
  const dispatch = useDispatch();
  function openModalWindow(element) {
    dispatch(
      openModal(props.type, props.img, props.text, props.date, props.length)
    );
  }
  return (
    <div className={classes.wrapper} onClick={openModalWindow}>
      <div className={classes.image}>
        <img src={props.img} alt="#" />
      </div>
      <div className={classes.itemContent}>
        <div className={classes.title + " itemContent__" + props.type}>
          <img src={typeIcon(props.type)} alt="#" />
          <span className={classes.contentType}>{chooseType(props.type)}</span>
          <span className={classes.length}>
            {props.length ? props.length : ""}
          </span>
        </div>
        <div className={classes.info}>
          <p className={classes.text}>{props.text}</p>
          <div className={classes.creation}>
            <span className={classes.author}>{props.authorName}</span>
            <span className={classes.dot}></span>
            <span className={classes.date}>{props.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentItem;
