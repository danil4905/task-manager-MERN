import classes from "./alertAccept.module.scss";
import Modal from "react-modal";
import close from "../../assets/cross.svg";
import { closeAlert } from "../../redux/actions/alert-actions";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/actions/newUser-actions";
import { Logout } from "../../redux/actions/auth-actions";
import {wordType} from '../../utils/alertWord';

const AlertAccept = (props) => {
  const dispatch = useDispatch();
  const isOpenedUser = useSelector((state) => state.alert.isOpenedUser);
  const isOpenedTask = useSelector((state) => state.alert.isOpenedTask);
  function deleteItem() {
    if (props.type === "user") {
      dispatch(deleteUser(props.id));
      dispatch(closeAlert());
    }
    if (props.type === "task") {
      dispatch();
    }
    if (props.type === "profile") {
      dispatch(Logout());
      dispatch(deleteUser(props.id));
      dispatch(closeAlert());
    }
  }

  return (
    <Modal
      onRequestClose={() => dispatch(closeAlert())}
      isOpen={
        props.type === "user" || props.type === "profile"
          ? isOpenedUser
          : isOpenedTask
      }
      style={{
        content: {
          border: "none",
          outline: "none",
          padding: "0",
          overflow: "initial",
          height: "166px",
          width: "395px",
          margin: "230px auto",
          verticalAlign: "center",
        },
      }}
    >
      <section className={classes.main}>
        <span className={classes.text}>
          Вы действительно хотите удалить {wordType(props.type)}
        </span>
        <div className={classes.buttons}>
          <button onClick={deleteItem} className={"default-btn " + classes.yes} autoFocus>
            Да
          </button>
          <button
            onClick={() => dispatch(closeAlert())}
            className={"default-btn " + classes.no}
          >
            Нет
          </button>
        </div>
        <button onClick={() => dispatch(closeAlert())} className={classes.close}>
          <img src={close} alt="Х" />
        </button>
      </section>
    </Modal>
  );
};

export default AlertAccept;
