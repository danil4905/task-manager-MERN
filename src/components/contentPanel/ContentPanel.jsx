import Results from "../results/Results";
import TypeBlock from "../typeBlock/typeBlock";
import classes from "./contentPanel.module.scss";
import { useState } from "react";
import API from "../../utils/newApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Comment from "../comment/Comment";

const ContentPanel = ({ task = "" }) => {
  const [message, writeMessage] = useState("");
  const [comments, setComments] = useState([]);
  const id = useSelector((state) => state.auth.user.id);
  useEffect( () => {
     API.get("/api/comments/" + task._id).then((response) =>
     setComments(response.data.reverse())
    );
  }, [task]);
  const handleSubmit = async (e) => {
    await API.post("/api/commentUpload", {
      author: id,
      task: task._id,
      message: message,
    }).then((response) => console.log(response));
    await API.get("/api/comments/" + task._id).then((response) =>
      setComments(response.data.reverse())
    );
    await writeMessage("");
  };

  return (
    <section className={classes.wrapper}>
      <section className={classes.results}>
        <div className={classes.topNav}>
          <h3 className={classes.title}>Результат</h3>
          <div className={classes.formatWrap}>
            <span className={classes.formats}>Допустимые форматы:</span>
            <TypeBlock type={task.type} />
          </div>
        </div>
        <Results type={task.type === "photo" ? "image" : task.type} id={task._id} />
      </section>
      <section className={classes.comments}>
        <textarea
          className={classes.textarea + " Input"}
          placeholder="Введите сообщение..."
          value={message}
          onChange={(e) => writeMessage(e.target.value)}
        />
        <div className={classes.btnWrapper}>
          <button
            className={classes.button + " default-btn"}
            onClick={handleSubmit}
          >
            Отправить
          </button>
        </div>
        <section className={classes.commentsList}>
          {comments[0] ? (
            <ul>
              {comments.map((element, index) => (
                <Comment
                  key={index}
                  img={element.user.avatar}
                  name={element.user.name}
                  message={element.message}
                  date={element.dateCreated}
                />
              ))}
            </ul>
          ) : (
            ""
          )}
        </section>
      </section>
    </section>
  );
};
export default ContentPanel;
