import TaskFilter from '../../components/task-filter/taskFilter';
import classes from './tasksPage.module.scss';
import ButtonLink from '../../components/button/buttonLink';
import crossIcon from "../../assets/Plus.png";
import {smallSelect} from '../../utils/customStylesSelect';
import TaskCard from '../../components/taskCard/task-card';


const TasksPage = ({search,date,select,audioActive,videoActive,photoActive,options,actions,dispatch}) => {
    let params = {
        search:search,
        date:date,
        select:select,
        audioActive: audioActive,
        videoActive: videoActive,
        photoActive: photoActive
    }
    return (
        <section className={'container ' + classes.main}>
            <div className={classes.labels}>
                <span>Поиск</span>
                <span>Статус</span>
                <span>Срок выполнения</span>
                <span>Тип контента</span>
            </div>
            <TaskFilter
            video={videoActive}
            audio={audioActive}
            photo={photoActive} 
            options={options} 
            search={search} 
            date={date} 
            dateStyle='small' 
            actions={actions} 
            dispatch={dispatch} 
            selectStyle={smallSelect}
            styles='tasks' />
            <div className={classes.newTask}>
            <ButtonLink
              path="/tasks/newTask"
              img={crossIcon}
              edit={false}
              text="Новая задача"
              type="newTask-btn"
            />
          </div>
            <section className={classes.tasks}>
                <TaskCard type='video' title='Название повседневная практика показывает' author='Аркадий Юрченко' date='10.02.2020' status='inWork' />

            </section>
        </section>
    )
}

export default TasksPage;