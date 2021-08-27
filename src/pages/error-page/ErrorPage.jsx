import ErrorImg from "../../assets/404.png";
import homeIcon from "../../assets/home-icon.png";
import classes from "./error-page.module.scss";
import ButtonLink from "../../components/button/buttonLink";


const PageError = (props) => (
  <div className="page-error">
    <div className="container">
      <div className={classes.container}>
        <img src={ErrorImg} alt="404" />
        <h3 className={classes.title}>Потерялись?</h3>
        <p>Страница, которую вы ищите не существует, либо была удалена</p>
        <ButtonLink
          text="На главную"
          img={homeIcon}
          path="/main"
          type="blue-link-btn"
        />
      </div>
    </div>
  </div>
);
export default PageError;
