import TaskFilter from "../../components/task-filter/taskFilter";
import classes from "./tasksPage.module.scss";
import ButtonLink from "../../components/button/buttonLink";
import crossIcon from "../../assets/Plus.png";
import { smallSelect } from "../../utils/customStylesSelect";
import TaskCard from "../../components/taskCard/task-card";
import { Filter } from "../../utils/filter";
import { useSelector } from "react-redux";
import Preloader from "../../components/preloader/preloader";

const TasksPage = ({
  search,
  date,
  select,
  audioActive,
  videoActive,
  photoActive,
  options,
  actions,
  dispatch,
  tasks,
}) => {
  let params = {
    search: search,
    date: date,
    select: select,
    audioActive: audioActive,
    videoActive: videoActive,
    photoActive: photoActive,
  };
  const userRole = useSelector((state) => state.auth.user.role);
  let filtered = Filter(tasks, params);

  return (
    <section className={"container " + classes.main}>
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
        dateStyle="small"
        actions={actions}
        dispatch={dispatch}
        selectStyle={smallSelect}
        styles="tasks"
      />
      <div className={classes.newTask}>
        <ButtonLink
          path="/tasks/newTask"
          img={crossIcon}
          edit={false}
          text="Новая задача"
          type="newTask-btn"
        />
      </div>
      {!filtered[0] ? (<>
      <span className={classes.error}>Задачи не найдены :(</span>
      <Preloader />
      </>
      ) : (
        <section className={classes.tasks}>
          {filtered.map((el, index) => (
            <TaskCard
              type={el.type}
              title={el.name}
              author={el.author}
              date={el.dateExpired}
              status={el.status}
              id={el._id}
              key={index}
              role={userRole}
            />
          ))}
        </section>
      )}
    </section>
  );
};

export default TasksPage;
