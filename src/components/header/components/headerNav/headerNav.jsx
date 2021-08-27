import { NavLink } from "react-router-dom";
import classes from "./headerNav.module.scss";

const HeaderNav = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            exact
            to={"/"}
            className={classes.navLink}
            activeClassName={classes.activeNav}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={"/tasks"}
            className={classes.navLink}
            activeClassName={classes.activeNav}
          >
            Задачи
          </NavLink>
        </li>
        {props.userRole === 'admin' ? <li>
          <NavLink
            to={"/users"}
            className={classes.navLink}
            activeClassName={classes.activeNav}
          >
            Пользователи
          </NavLink>
        </li>
        : ''}
      </ul>
    </nav>
  );
};
export default HeaderNav;
