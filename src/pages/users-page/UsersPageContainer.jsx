import API from "../../utils/newApi";
import UsersPage from "./UsersPage";
import { useEffect, useState } from "react";
import { setUsers } from "../../redux/actions/usersPage-actions";
import { useDispatch, useSelector } from "react-redux";

const UsersPageContainer = (props) => {
  const dispatch = useDispatch();
  const userAccessRole = useSelector(state => state.auth.user.role)
  const [users, setUsersData] = useState([]);
  useEffect(() => {
    API.get("api/users").then((res) => {
      setUsersData(res.data);
    });
  }, []);
  dispatch(setUsers(users));
  return <UsersPage users={users} userRole={userAccessRole} />;
};
export default UsersPageContainer;
