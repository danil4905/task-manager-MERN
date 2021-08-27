import ArrowBack from "../../components/arrowBack/arrowBack";
import classes from "./publish.module.scss";
import tick from "../../assets/tick.svg";
import API from "../../utils/newApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../../components/preloader/preloader";

const PublishPage = (props) => {
  const [files, setFiles] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [taskInfo, setTaskInfo] = useState("");

  const { id } = useParams();
  useEffect(() => {
    API.get("api/tasks/" + id).then((response) => {
      setFiles(response.data.contents);
      setTaskInfo(response.data);
      setSelectedFile(response.data.contents[0]);
    });
  }, [id]);
  console.log(selectedFile, taskInfo);
  function handleSubmit() {
    const data = {
      name:taskInfo.name,
      type:taskInfo.type,
      taskId:taskInfo._id,
      author:taskInfo.author._id,
      fileName:selectedFile.filename,
      fileType:selectedFile.mimetype
    }
    API.post("api/contentUpload", data).then((response) =>
      console.log(response)
    );
  }

  return (
    <section className={"container " + classes.wrapper}>
      <div className={classes.topNav}>
        <ArrowBack />
        <span>Выберите файл для публикации</span>
      </div>
      <section className={classes.main}>
        <section className={classes.files}>
          {!files ? (
            <Preloader />
          ) : (
            files.map((element, index) => {
              return (
                <div
                  className={`${classes.fileItem} ${
                    selectedFile.originalname === element.originalname
                      ? "acitveFile"
                      : ""
                  }`}
                  key={index}
                  onClick={() => setSelectedFile(element)}
                >
                  <img
                    src={"http://localhost:5000/static/" + element.filename}
                    alt=""
                  />
                  <div className={classes.fileInfo}>
                    <span>{element.originalname}</span>
                    <span className={classes.date}>dateCreated</span>
                  </div>
                </div>
              );
            })
          )}
        </section>
        <section className={classes.setting}>
          <label htmlFor="title" className={classes.label}>
            Изменить название
          </label>{" "}
          <br />
          <input
            type="text"
            className={"Input " + classes.input}
            value={selectedFile.originalname}
          />
          <button
            className={"default-btn " + classes.button}
            onClick={handleSubmit}
          >
            <img src={tick} alt="#" />
            <span>Утвердить и опубликовать</span>
          </button>
        </section>
      </section>
    </section>
  );
};
export default PublishPage;
