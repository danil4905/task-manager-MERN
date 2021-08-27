import { Link } from "react-router-dom";
import classes from './headerMenu.module.scss';
import { Logout } from "../../../../redux/actions/auth-actions";
import { useDispatch } from "react-redux";

const HeaderMenu = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.headerMenu}>
      <Link className={classes.menuItem} to="/profile">Профиль</Link>
      <Link to='/login' className={classes.menuItem} onClick={() =>dispatch(Logout())}>Выход</Link>
    </div>
  );
};
export default HeaderMenu;
