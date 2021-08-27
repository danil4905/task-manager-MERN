import classes from "./usersPage.module.scss";
import ButtonLink from "../../components/button/buttonLink";
import SortingUsers from "../../components/sorting/SortingUsers";
import UserItem from "../../components/userItem/userItem";
import { useSelector } from "react-redux";
import crossIcon from "../../assets/Plus.png";
import { Sorting } from "../../utils/sorting";
import { Redirect } from "react-router-dom";

const UsersPage = (props) => {
  let params = {
    role: useSelector((state) => state.usersPage.currentType),
    search: useSelector((state) => state.inputs.searchInputUsersPage),
  };
  let filtered = Sorting(props.users, params);
  if (props.userRole !== 'admin') {
    return (<Redirect to='/' />)
  }
  else
    return (
      <div className="container">
        <section className={classes.wrapper}>
          <section className={classes.sorting}>
            <div className={classes.labels}>
              <span className={classes.text}>Поиск</span>
              <span className={classes.text}>Роль</span>
            </div>
            <div className={classes.sortingInputs}>
              <SortingUsers />
            </div>
          </section>
          <div className={classes.newUser}>
            <ButtonLink
              path="/users/newUser"
              img={crossIcon}
              edit={false}
              text="Новый пользователь"
              type="newUser-btn"
            />
          </div>
          <section className={classes.listOfUsers}>
            {filtered.map((element) => (
              <UserItem
                author={element.name}
                key={element._id}
                email={element.email}
                img={element.avatar}
                role={element.role}
                id={element._id}
              />
            ))}
          </section>
        </section>
      </div>
    );
};

export default UsersPage;
