import { useEffect, useState } from "react";
import API from "../../utils/newApi";
import NotificationsPage from "./NotificationsPage";

const NotificationsContainer = (props) => {
  const [isLoading, setIsloading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let notifications;
    API.get("/api/notifications")
      .then((res) => {
        notifications = res;
      })
      .then(() => {
        setItems(notifications.data);
        setIsloading(false);
      });
  }, []);
  return <NotificationsPage items={items} isLoading={isLoading} />;
};
export default NotificationsContainer;
