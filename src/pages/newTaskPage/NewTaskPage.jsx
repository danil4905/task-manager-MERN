import Select from "react-select";
import ArrowBack from "../../components/arrowBack/arrowBack";
import classes from "./newTaskPage.module.scss";
import { bigSelect } from "../../utils/customStylesSelect";
import DateInput from "../../components/input/dateInput";
import Pin from "../../assets/pin.png";
import { useState } from "react";
import FileInfo from "../../components/fileInfo/fileInfo";
import { createNewTask } from "../../redux/actions/newTaskPage-actions";
import saveIcon from "../../assets/save.png";
import { Validate } from "../../utils/validate";

const NewTaskPage = (props) => {
  const [files, setFile] = useState([]);
  const [invlidInputs, setInputs] = useState([]);
  function deleteFile(id) {
    let newFiles = Object.create(files);
    newFiles.splice(id, 1);
    setFile(newFiles);
  }
  function getClass(value) {
    if(!value) return 'invalidInput';
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    let invalids = [
        Validate(props.state.type),
      Validate(props.state.name),
      Validate(props.state.description),
      Validate(props.state.dateExpired),
      Validate(props.state.author),
      Validate(props.state.executor),
    ];
    setInputs(invalids);
    if (!invlidInputs[0]) {
      data.append("name", props.state.name);
      data.append("type", props.state.type);
      data.append("description", props.state.description);
      data.append("author", props.state.author);
      data.append("executor", props.state.executor);
      data.append("dateExpired", props.state.dateExpired);
      for (let i = 0; i < files.length; i++) {
        data.append("files", files[i]);
      }
      props.dispatch(createNewTask(data));
    }
  }
  debugger;
  return (
    <section className={"container " + classes.wrapper}>
      <div className={classes.backWrapper}>
        <ArrowBack />
        <span>К списку задач</span>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <section className={classes.leftSide}>
          <label className={classes.label} htmlFor="contentType">
            Тип контента
          </label>
          <Select
            options={props.statusOptions}
            placeholder="Выберите тип контента"
            styles={bigSelect}
            className={classes.input+" "+getClass(invlidInputs[0])}
            onChange={(e) => props.inputChange("type", e.value)}
          />
          <label className={classes.label} htmlFor="contentTitle">
            Заголовок
          </label>
          <br />
          <input
            className={classes.input + " Input "+getClass(invlidInputs[1])}
            type="text"
            id="contentTitle"
            placeholder="Введите заголовок задачи"
            value={props.state.name}
            onChange={(e) => props.inputChange("name", e.target.value)}
          />
          <br />
          <label className={classes.label} htmlFor="contentDescription">
            Описание
          </label>
          <br />
          <textarea
            className={classes.textarea + " Input "+getClass(invlidInputs[2])}
            resize="none"
            type="textarea"
            id="contentDescription"
            placeholder="Опишите требования"
            value={props.state.description}
            onChange={(e) => props.inputChange("description", e.target.value)}
          />
          {files[0]
            ? files.map((el, index) => (
                <FileInfo
                  action={deleteFile}
                  type={el.type}
                  name={el.name}
                  size={el.size}
                  key={index}
                  id={index}
                />
              ))
            : ""}

          <div className={classes.fileWrap}>
            <img src={Pin} alt="#" />
            <label className={classes.labelFile}>
              Прикрепить файл
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo"
                className={classes.fileInput+" "+getClass(invlidInputs[3])}
                onChange={(e) =>
                  setFile((files) => [...files, e.target.files[0]])
                }
              />
            </label>
          </div>
        </section>
        <section className={classes.rightSide}>
          <label className={classes.label}>Срок выполнения</label>
          <DateInput
            className={classes.inputRight+" "+getClass(invlidInputs[4])}
            text="Укажите дату"
            styles="middle"
            value={props.state.dateExpired}
            action={props.dateChange}
          />
          <label className={classes.label}>Инициатор</label>
          <Select
            className={classes.inputRight+" "+getClass(invlidInputs[5])}
            placeholder="Выберите инициатора"
            options={props.userOptions}
            onChange={(e) => props.inputChange("author", e.value)}
          />
          <label className={classes.label}>Ответственный</label>
          <Select
            className={classes.inputRight+" "+getClass(invlidInputs[6])}
            placeholder="Выберите ответственного"
            options={props.userOptions}
            onChange={(e) => props.inputChange("executor", e.value)}
          />
        </section>
        <button type="submit" className={"default-btn " + classes.btnSave}>
          <img src={saveIcon} alt="save" className={classes.save} />
          Создать задачу
        </button>
      </form>
    </section>
  );
};

export default NewTaskPage;
