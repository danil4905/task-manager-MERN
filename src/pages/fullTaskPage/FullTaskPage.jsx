import ArrowBack from "../../components/arrowBack/arrowBack";
import classes from "./editTaskPage.module.scss";
import { typeIcon } from "../../components/taskCard/task-card";
import { chooseType } from "../../utils/chooseType";
import FileDownload from "../../components/fileDowload/FileDownload";
import { chooseRole } from "../../utils/chooseRole";
import ContentPanel from "../../components/contentPanel/ContentPanel";
import Preloader from "../../components/preloader/preloader";
import { useDispatch, useSelector } from "react-redux";
import ButtonLink from "../../components/button/buttonLink";
import ediIcon from "../../assets/edit.svg";
import deleteicon from "../../assets/delete-icon-white.svg";
import {openAlert} from '../../redux/actions/alert-actions';
import AlertAccept from "../../components/alert/alertAccept";
import aprooveIcon from '../../assets/aproove_white.svg';

const FullTaskPage = ({ task = "" }) => {
  const userRole = useSelector((state) => state.auth.user.role);
  const dispatch = useDispatch()
  if (task === null) return <Preloader />;
  else {
    return (
      <section className={"container " + classes.wrapper}>
        <section className={classes.topWrap}>
          <div className={classes.back}>
            <ArrowBack />
            <span>К списку задач</span>
          </div>
          {userRole !== "content-maker"  ? (
            <div className={classes.controls}>
              {userRole!== 'content-maker' && task.status === 'pending'?
              <ButtonLink 
              type="publishTask"
              path={"/publishTask/" + task._id}
              data={task}
              edit={true}
              text='Утвердить и опубликовать'
              img={aprooveIcon}
              />: ''}
              <ButtonLink
                type="editTaskBlue"
                path={"/editTask/" + task._id}
                data={task}
                edit={true}
                img={ediIcon}
              />
              <button className={"default-btn deleteTaskFull"} onClick={() => dispatch(openAlert('isOpenedTask'))} >
                {" "}
                <img src={deleteicon} alt="delete" />
              </button>
            </div>
          ) : (
            ""
          )}
        </section>
        <section className={classes.mainWrap}>
          <section className={classes.managerPanel}>
            <section className={classes.taskMainInfo}>
              <div className={classes.topInfo}>
                <img
                  src={typeIcon(task.type)}
                  alt="#"
                  className={classes.typeImg}
                />
                <span
                  className={classes.typeText + " itemContent__" + task.type}
                >
                  {chooseType(task.type)}
                </span>
                <span className={classes.statusText + " " + task.status}>
                  {chooseRole(task.status)}
                </span>
              </div>
              <h2 className={classes.title}>{task.name}</h2>
              <p className={classes.descriptions}>{task.description}.</p>
              <div className={classes.filesWrap}>
                <h4 className={classes.filesTitle}>Файлы</h4>
                {task.files[0]
                  ? task.files.map((el, i) => (
                      <FileDownload file={el} key={i} />
                    ))
                  : <span className={classes.noFiles}>Файлов нет</span>}
              </div>
            </section>
            <section className={classes.taskAddInfo}>
              <ul className={classes.taskAddInfoList}>
                <li className={classes.taskAddInfoItem}>
                  <span className={classes.topNavTitle}>Здадача созадана</span>
                  <span className={classes.devineBlock}> </span>
                  <span className={classes.addInfoValue}>
                    {new Date(task.dateCreated)
                      .toLocaleDateString()
                      .split("/")
                      .join(".")}
                  </span>
                </li>
                <li className={classes.taskAddInfoItem}>
                  <span className={classes.topNavTitle}>Срок выполнения</span>
                  <span className={classes.devineBlock}></span>
                  <span className={classes.addInfoValue}>
                    {new Date(task.dateExpired)
                      .toLocaleDateString()
                      .split("/")
                      .join(".")}
                  </span>
                </li>
                <li className={classes.taskAddInfoItem}>
                  <span className={classes.topNavTitle}>Опубликовал</span>
                  <span className={classes.devineBlock}></span>
                  <span className={classes.addInfoValue}>
                    {task.author.name}
                  </span>
                </li>
                <li className={classes.taskAddInfoItem}>
                  <span className={classes.topNavTitle}>Ответственный</span>
                  <span className={classes.devineBlock}></span>
                  <span className={classes.addInfoValue}>
                    {task.executor.name}
                  </span>
                </li>
              </ul>
            </section>
          </section>
          {userRole !== "manager" ? <ContentPanel task={task} /> : ""}
        </section>
        <AlertAccept type='task' id={task._id} />
      </section>
    );
  }
};

export default FullTaskPage;
