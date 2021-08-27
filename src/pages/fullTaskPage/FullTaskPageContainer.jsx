import { useEffect, useState } from "react";
import FullTaskPage from "./FullTaskPage";
import { useParams } from "react-router-dom";
import API from "../../utils/newApi";

const FullTaskPageContainer = (props) => {
  let { id } = useParams();
  const [task, setTask] = useState(null);
  useEffect(() => {
    API.get("api/tasks/" + id).then((res) => {
      setTask(res.data);
    });
  });
  return <FullTaskPage task={task} />;
};

export default FullTaskPageContainer;
