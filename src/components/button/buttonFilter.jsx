import "./button.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  togglePhotoButton,
  toggleAudioButton,
  toggleVideoButton,
} from "../../redux/actions/mainPage-actions";

const AUDIO = "audio";
const VIDEO = "video";
const PHOTO = "photo";

const activeStyleAudio = {
  background: "#FFAC2F",
  color: "white",
};
const activeStyleVideo = {
  background: "#107EFF",
  color: "white",
};
const activeStylePhoto = {
  background: "#43DD9C",
  color: "white",
};

function chooseAction(type) {
  switch (type) {
    case AUDIO:
      return toggleAudioButton;
    case VIDEO:
      return toggleVideoButton;
    case PHOTO:
      return togglePhotoButton;
    default:
      break;
  }
}
function setSelector(type) {
  switch (type) {
    case AUDIO:
      return (state) => state.mainPage.audioActive;
    case VIDEO:
      return (state) => state.mainPage.videoActive;
    default:
      return (state) => state.mainPage.photoActive;
  }
}
const Button = ({ text, img, type,toggle='',value='' }) => {
  let active = useSelector(setSelector(type));

  function chooseStyle(type) {
    if(value) {
      switch (type) {
        case AUDIO:
          return activeStyleAudio;
        case VIDEO:
          return activeStyleVideo;
        case PHOTO:
          return activeStylePhoto;
        default:
          break;
      }
    }
    else if (active) {
      switch (type) {
        case AUDIO:
          return activeStyleAudio;
        case VIDEO:
          return activeStyleVideo;
        case PHOTO:
          return activeStylePhoto;
        default:
          break;
      }
    }
  }

  const dispatch = useDispatch();
  function toggleActiveButton(type) {
    let current = chooseAction(type);
    dispatch(current());
  }
  function toggleFunc() {
    dispatch(toggle())
  }

  return (
    <button
      className={"default-btn buttonFilter buttonFilter__" + type}
      onClick={toggle?toggleFunc:() => toggleActiveButton(type)}
      style={chooseStyle(type)}
    >
      <img src={img} alt={text} className="filterIcon" />
      {text}
    </button>
  );
};
export default Button;
