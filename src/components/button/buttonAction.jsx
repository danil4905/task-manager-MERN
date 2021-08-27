import "./button.scss";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { ReactComponent as AddIcon } from "../../assets/add.svg";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as AprooveIcon } from "../../assets/aproove.svg";
import { ReactComponent as EditSmall } from "../../assets/edit_small.svg";
import { ReactComponent as CrossIcon } from "../../assets/cross.svg";
import { ReactComponent as BinIcon } from "../../assets/Union.svg";
import { ReactComponent as PinIcon } from "../../assets/pin_white.svg";
import { ReactComponent as DownloadIcon } from "../../assets/upload-icon.svg";
import { ReactComponent as PinCircle } from "../../assets/pin_circle.svg";
import {ReactComponent as LoginIcon } from '../../assets/login.svg';

const renderIcon = (type) => {
  switch (type) {
    case "delete":
      return <DeleteIcon className="buttonAction__icon" />;
    case "add":
      return <AddIcon className="buttonAction__icon" />;
    case "edit":
      return <EditIcon className="buttonAction__icon" />;
    case "editSmall":
      return <EditSmall className="buttonAction__icon" />;
    case "aproove":
      return <AprooveIcon className="buttonAction__icon" id="aproove" />;
    case "cross":
      return <CrossIcon className="buttonAction__icon" />;
    case "bin":
      return <BinIcon className="buttonAction__icon" />;
    case "pin":
      return <PinIcon className="buttonAction__icon" id="pin" />;
    case "download":
      return <DownloadIcon className="buttonAction__icon" id="downloadIcon" />;
    case "upload":
      return <PinCircle className="buttonAction__icon" id="pinCircle" />;
    case "login":
      return <LoginIcon className="buttonAction__icon" id="loginIcon" />;
    default:
      break;
  }
};

const ButtonAction = ({ text, type, styles,special='' }) => {
  return (
    <button
      className={"default-btn buttonAction__" + type + " btnColor__" + styles + ' btnSpecial__'+special}
    >
      {renderIcon(type)}
      {text ? <span className="button__text">{text}</span> : ""}
    </button>
  );
};
export default ButtonAction;
