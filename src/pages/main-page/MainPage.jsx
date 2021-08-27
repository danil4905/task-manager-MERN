import classes from "./main-page.module.scss";
import ContentItem from "../../components/contentItem/contentItem";
import TaskFilter from "../../components/task-filter/taskFilter";
import { useSelector } from "react-redux";
import ModalWindow from "../../components/modalItem/modalWindow";
import { Filter } from "../../utils/filter";

const MainPage = (props) => {
  const params = {
    openedModal: useSelector((state) => state.mainPage.isModalOpen),
    searchInput: useSelector((state) => state.inputs.searchInputMainPage),
    dateInput: useSelector((state) => state.inputs.dateInputMainPage),
    audioActive: useSelector((state) => state.mainPage.audioActive),
    videoActive: useSelector((state) => state.mainPage.videoActive),
    photoActive: useSelector((state) => state.mainPage.photoActive),
  };
  let filtered = Filter(props.contents, params);
 
  return (
    <div className="container">
      <div className={classes.wrapper}>
        <TaskFilter search={params.searchInput} date={params.dateInput}/>
        <div className={classes.gridContent}>
          {filtered.map((item) => (
            <ContentItem
              key={item._id + "" + Math.random(100)}
              type={item.type}
              text={item.name}
              img={item.url}
              length={item.preview}
              authorName={item.author}
              date={item.dateCreated}
            />
          ))}
          <ModalWindow type={props.type} isOpened={params.openedModal} />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
