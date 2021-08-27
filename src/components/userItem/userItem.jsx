import classes from "./userItem.module.scss";
import { chooseRole } from "../../utils/chooseRole";
import ButtonLink from "../button/buttonLink";
import ediIcon from "../../assets/edit-iconBlue.svg";
import deleteicon from "../../assets/delete-icon.svg";
import defaultAvatar from '../../assets/ava.png';
import AlertAccept from "../alert/alertAccept";
import { openAlert } from "../../redux/actions/alert-actions";
import { useDispatch } from "react-redux";

const UserItem = (props) => {
  localStorage.setItem('userEditId', props.id)
  const dispatch = useDispatch();
  return (
    <div className={classes.card}>
      <div className={classes.avatar}>
        <img src={props.img ? props.img : defaultAvatar} alt="avatar" className={classes.avatarImg}/>
      </div>
      <span className={classes.name}>{props.author}</span>
      <span className={classes.email}>{props.email}</span>
      <span className={classes.role}>{chooseRole(props.role)}</span>
      <div className={classes.controls}>
        <ButtonLink
          type="editUser"
          path="users/editUser"
          data={props}
          edit={true}
          img={ediIcon}
        />
        <button className={'default-btn deleteUser'} onClick={() => dispatch(openAlert('isOpenedUser'))}> <img src={deleteicon} alt="delete" /></button>
      </div>
      <AlertAccept type='user' id={props.id} />
    </div>
  );
};

export default UserItem;
