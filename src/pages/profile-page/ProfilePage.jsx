import classes from "../newUserPage/newUserPage.module.scss";
import ArrowBack from "../../components/arrowBack/arrowBack";
import { ReactComponent as UploadIcon } from "../../assets/upload-icon.svg";
import AlertAccept from "../../components/alert/alertAccept";
import { useSelector,useDispatch } from "react-redux";
import { openAlert } from "../../redux/actions/alert-actions";
import { changeInput } from "../../redux/actions/auth-actions";
import { editProfile } from "../../redux/actions/newUser-actions";
import deleteIcon from "../../assets/delete-icon_red.svg";
import defaultAvatar from "../../assets/ava.png";
import saveIcon from "../../assets/save.png";
import { useState } from "react";

const ProfilePage = (props) => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.name);
  const email = useSelector(state => state.auth.email);
  const id = useSelector(state => state.auth.user.id);
  const avatar = useSelector(state => state.auth.avatar)
  const [preview, setImg] = useState(defaultAvatar)
  const [img,setItem] = useState(null);
  function onFileChange(e) {
    setImg(URL.createObjectURL(e.target.files[0]))
    setItem(e.target.files[0])
    dispatch(changeInput('avatar', e.target.files[0]))
    console.log(e.target.files[0])
  }
  function handleSubmit (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',name);
    formData.append('email',email);
    formData.append('avatar', img);
    dispatch(editProfile(id,formData));
    console.log(avatar)
  }

  return (
    <section className={"container " + classes.container}>
      <section className={classes.topNav}>
        <ArrowBack />
        <h2 className={classes.title}>Профиль</h2>
      </section>
      <section className={classes.wrapperProfile}>
        <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
          <div className={classes.leftSide}>
            <div className={classes.formImage}>
              <img src={typeof(avatar)==='string' ? avatar : preview} className={classes.avatar} alt="#" />
            </div>
            <div className={classes.fileWrap}>
              <UploadIcon />
              <label className={classes.labelFile}>
                Загрузить аватар
                <input type="file" className={classes.fileInput} onChange={(e) => onFileChange(e)}/>
              </label>
            </div>
          </div>
          <div className={classes.rightSide}>
            <label className={classes.label} htmlFor="newName">
              Имя, фамилия
            </label>
            <input
              className={classes.input + " Input"}
              type="text"
              placeholder="Введите имя и фамилию"
              id="newName"
              value={name}
              onChange={(e) => dispatch(changeInput('name',e.target.value))}
            />
            <label className={classes.label} htmlFor="newEmail">
              E-mail
            </label>
            <input
              className={classes.input + " Input"}
              type="email"
              placeholder="Введите e-mail"
              id="newEmail"
              value={email}
              onChange={(e) => dispatch(changeInput('email', e.target.value))}
            />
            <div className={classes.buttonsButtom}>
                <button
                  type='submit'
                  className={"default-btn " + classes.btnSave}>
                  <img src={saveIcon} alt="save" className={classes.save} />
                  Сохранить
                </button>
              <button className={"default-btn " + classes.btnDelete} onClick={() => dispatch(openAlert('isOpenedUser'))}>
                    <img
                      src={deleteIcon}
                      alt="delete"
                      className={classes.delete}
                    />
                    Удалить профиль
                  </button>
              </div>
          </div>
        </form>
      </section>
      <AlertAccept type='user' id={id}/>
    </section>
  );
};
export default ProfilePage;
