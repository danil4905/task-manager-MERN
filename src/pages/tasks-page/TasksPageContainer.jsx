import { useState, useEffect } from "react";
import API from "../../utils/newApi";
import TasksPage from "./TasksPage";
import {
  togglePhotoButtonTask,
  toggleAudioButtonTask,
  toggleVideoButtonTask,
  writeSearchInputTask,
  writeDateInputTask,
  writeSelectTask
} from "../../redux/actions/tasksPage-actions";
import { useDispatch, useSelector } from "react-redux";
import {optionStatus} from '../../redux/const/options';

const TasksPageContainer = (props) => {
  const state = useSelector((state) => state.tasksPage);
  const dispatch = useDispatch();
  const [tasks, setContents] = useState([]);
  useEffect( () => {
     API.get("api/tasks").then((res) => {
      setContents(res.data);
    });
  }, [tasks]);
  return (
    <TasksPage
      tasks={tasks}
      actions={[
        toggleVideoButtonTask,
        togglePhotoButtonTask,
        toggleAudioButtonTask,
        writeSearchInputTask,
        writeDateInputTask,
        writeSelectTask
      ]}
      search={state.searchInput}
      date={state.dateInput}
      select={state.selectInput}
      videoActive={state.videoActiveTask}
      audioActive={state.audioActiveTask}
      photoActive={state.photoActiveTask}
      dispatch={dispatch}
      options={optionStatus}
    />
  );
};
export default TasksPageContainer;
