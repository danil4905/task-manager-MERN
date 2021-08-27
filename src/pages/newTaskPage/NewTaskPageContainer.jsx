import { getUsersOptions } from '../../redux/const/options';
import { useEffect,useState } from 'react';
import { optionStatus } from '../../redux/const/options';
import NewTaskPage from './NewTaskPage';
import { useSelector,useDispatch } from 'react-redux';
import { changeNewTaskInput, changeNewTaskDate } from '../../redux/actions/newTaskPage-actions';



const NewTaskPageContainer = () => {
    const state = useSelector(state => state.newTaskPage);
    const dispatch = useDispatch();
    const HandleChange = (name,value) => {
        dispatch(changeNewTaskInput(name,value))
    }
    const [usersOptions,setOptions] = useState([]);
    useEffect(()=> getUsersOptions().then(function(result){setOptions(result)}),[])

    return (
        <NewTaskPage 
            userOptions={usersOptions} 
            statusOptions={optionStatus}
            inputChange={HandleChange}
            dateChange={changeNewTaskDate}
            state={state}
            />
    )
}

export default NewTaskPageContainer;

