import Logo from "../../assets/logoBig.png";
import classes from "./login-page.module.scss";
import { ReactComponent as LoginIcon } from "../../assets/login.svg";
import { changeInput } from "../../redux/actions/inputs-actions";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "../../redux/actions/auth-actions";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Preloader from "../../components/preloader/preloader";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.inputs.loginAuth);
  const password = useSelector((state) => state.inputs.passwordAuth);
  const isAuth = useSelector((state) => state.auth.isLogined);
  const error = useSelector((state) => state.auth.errorMessage);
  const [loading, setLoading] = useState(false);
  let formData = {
    email: login,
    password: password,
  };
  function handleSubmit(e) {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    setLoading(true);
    e.preventDefault();
    dispatch(Login(formData));
  }
  if (isAuth) return <Redirect to="/" />;
  else
    return (
      <div className={classes.wrapper}>
        <img src={Logo} alt="logo" width="70px" height="70px" />
        <div className={classes.loginForm}>
          <h2 className={classes.title}>Вход</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="emailLogin" className={classes.loginLabel}>
              E-mail
            </label>{" "}
            <br />
            <input
              type="email"
              placeholder="Введите e-mail"
              id="emailLogin"
              className={"Input " + classes.loginInput}
              value={login}
              disabled={loading}
              onChange={(e) =>
                dispatch(changeInput("loginAuth", e.target.value))
              }
            />
            <br />
            <label htmlFor="passwordLogin" className={classes.loginLabel}>
              Пароль
            </label>
            <br />
            <input
              type="password"
              placeholder="Введите пароль"
              id="passwordLogin"
              className={"Input " + classes.loginInput}
              value={password}
              disabled={loading}
              onChange={(e) =>
                dispatch(changeInput("passwordAuth", e.target.value))
              }
            />
            {error ? <span className={classes.error}>{error}</span> : ""}
            <button
              type="submit"
              className="default-btn buttonAction__login btnColor__blue btnSpecial__"
              disabled={loading}
            >
              <LoginIcon className={classes.icon} />
              Войти
            </button>
          </form>
        </div>
        {loading ? (
          <div className={classes.loading}>
            <Preloader />
          </div>
        ) : (
          ""
        )}
      </div>
    );
};

export default LoginPage;
