import arrowDown from "../../../../assets/arrow-down.svg";
import classes from "./headerUser.module.scss";
import HeaderMenu from "../headerMenu/headerMenu";
import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from '../../../../assets/ava.png'
import { toggleMenu } from "../../../../redux/actions/header-actions";

const HeaderUser = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.user)
  function toggleHeaderMenu() {
    dispatch(toggleMenu());
  }
  let opened = useSelector((state) => state.header.opened);
  return (
    <div className={classes.user}>
      <div className={classes.userName}>{currentUser.name}</div>
      <div className={classes.userAvatar} onClick={() => toggleHeaderMenu()}>
        <div className={classes.userImg}>
          <img className={classes.avatar+' '+ classes.avatarImg } width='50px' src={currentUser.avatar ? currentUser.avatar: defaultAvatar } alt="ava" />
          {opened ? <HeaderMenu /> : ""}
        </div>
        <button className={classes.arrow}>
          <img src={arrowDown} alt="#" />
        </button>
      </div>
    </div>
  );
};
export default HeaderUser;
