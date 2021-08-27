import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Auth } from "./redux/actions/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import MainPageContainer from "./pages/main-page/MainPageContainer";
import ErrorPage from "./pages/error-page/ErrorPage";
import Header from "./components/header/Header";
import NotificationsContainer from "./pages/notification-page/NotificationsContainer";
import UsersPageContainer from "./pages/users-page/UsersPageContainer";
import LoginPage from "./pages/login-page/LoginPage";
import ProfilePage from "./pages/profile-page/ProfilePage";
import "./App.scss";
import NewUserPage from "./pages/newUserPage/newUserPage";
import { useEffect } from "react";
import TasksPageContainer from "./pages/tasks-page/TasksPageContainer";
import NewTaskPageContainer from "./pages/newTaskPage/NewTaskPageContainer";

function App() {
  const isAuth = useSelector((state) => state.auth.isLogined);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Auth());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {!isAuth ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Header />
                <main className="app-wrapper">
                  <MainPageContainer />
                </main>
              </>
            )}
          </Route>
          <Route exact path="/notifications">
            {!isAuth ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Header />
                <main className="app-wrapper">
                  <NotificationsContainer />
                </main>
              </>
            )}
          </Route>
          <Route exact path="/profile">
            {!isAuth ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Header />
                <main className="app-wrapper">
                  <ProfilePage />
                </main>
              </>
            )}
          </Route>
          <Route exact path="/tasks">
            {!isAuth ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Header />
                <main className="app-wrapper">
                  <TasksPageContainer />
                </main>
              </>
            )}
          </Route>
          <Route exact path="/login">
            <main className="app-wrapper">
              <LoginPage />
            </main>
          </Route>
          <Route
            exact
            path={["/users/newUser", "/users/editUser"]}
            component={isAuth ? NewUserPage : LoginPage}
          ></Route>
          <Route exact path="/users">
            {!isAuth ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Header />
                <main className="app-wrapper">
                  <UsersPageContainer />
                </main>
              </>
            )}
          </Route>
          <Route exact path="/tasks/newTask">
            {!isAuth ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Header />
                <main className="app-wrapper">
                  <NewTaskPageContainer />
                </main>
              </>
            )}
          </Route>
          <Route path="*">
            <Header />
            <main className="app-wrapper">
              <ErrorPage />
            </main>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
