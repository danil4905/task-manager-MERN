import { useEffect, useState } from "react";
import EditTaskPage from "./EditTaskPage";
import { useParams } from "react-router-dom";
import API from '../../utils/newApi';
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../components/preloader/preloader";
import { getUsersOptions, contentType } from "../../redux/const/options";

import { changeEditTaskInput, changeEditTaskDate} from '../../redux/actions/editTaskPage-actions';


const EditTaskPageContainer = (props) => {
    let { id } = useParams();
    console.log(id)
    const state = useSelector(state => state.editTaskPage)
    const dispatch = useDispatch();
    const [task, setTask] = useState(null);
    const HandleChange = (name, value) => {
        dispatch(changeEditTaskInput(name, value));
    };
    const [usersOptions, setOptions] = useState([]);
    useEffect(() => {
        API.get("api/tasks/" + id).then((res) => {
            setTask(res.data);
            getUsersOptions().then(function (result) {
                setOptions(result);
            })
            dispatch(changeEditTaskInput('name', res.data.name))
            dispatch(changeEditTaskInput('description', res.data.description))
            dispatch(changeEditTaskInput('type', res.data.type))
            dispatch(changeEditTaskInput('author', res.data.author._id))
            dispatch(changeEditTaskInput('executor', res.data.executor._id))
            dispatch(changeEditTaskDate(res.data.dateExpired))
        });
    }, [dispatch, id]);
    if (task === null) {
        return (<Preloader />)
    }
    else {
    return (
        <EditTaskPage task={task} state={state} dispatch={dispatch} statusOptions={contentType} inputChange={HandleChange} userOptions={usersOptions} dateChange={changeEditTaskDate}
/>
    )
    }
}
export default EditTaskPageContainer;