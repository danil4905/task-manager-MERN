import classes from "./notifications.module.scss";
import ArrowBack from "../../components/arrowBack/arrowBack";
import Notification from "../../components/notification/notification";

const NotificationsPage = (props) => {
  return (
    <div className="container">
      <section className={classes.wrapper}>
        <div className={classes.title}>
          <ArrowBack />
          <h2 className={classes.titleText}>Уведомления</h2>
        </div>
        <div className={classes.content}>
          {props.isLoading
            ? "загрузка..."
            : props.items.map((item) => (
                <Notification
                  type={item.type}
                  key={item._id}
                  userName={item.user}
                  taskName={item.task}
                  date={item.date}
                />
              ))}
        </div>
      </section>
    </div>
  );
};
export default NotificationsPage;
