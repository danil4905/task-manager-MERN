import classes from "./newUserPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Select from "react-select";
import Header from "../../components/header/Header";
import ArrowBack from "../../components/arrowBack/arrowBack";
import deleteIcon from "../../assets/delete-icon_red.svg";
import defaultAvatar from "../../assets/ava.png";
import saveIcon from "../../assets/save.png";
import { ReactComponent as UploadIcon } from "../../assets/upload-icon.svg";
import eyeOpen from "../../assets/visible-icon.svg";
import eyeClose from "../../assets/not-visible-icon.svg";
import { changeNewUser } from "../../redux/actions/newUser-actions";
import { getUser } from "../../redux/actions/newUser-actions";
import { register } from "../../redux/actions/auth-actions";
import AlertAccept from "../../components/alert/alertAccept";
import { openAlert } from "../../redux/actions/alert-actions";
import {editUser} from '../../redux/actions/newUser-actions'
import {chooseRole} from '../../utils/chooseRole.js';
import {roles} from '../../redux/const/options.js';

const NewUserPage = (props) => {

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const state = useSelector(state => state.newUserPage);
  const error = useSelector(state => state.newUserPage.error);
  const [img,setImg] = useState(defaultAvatar);
  const [avatar,setAvatar] = useState(null);
  let userId = useSelector((state) => state.newUserPage.currentUserid);

  let newUser = {
    name: state.name,
    email: state.email,
    password: state.password,
    avatar: state.avatar,
    role: state.role,
  }
  let editUserData = {
    id:userId,
    name: state.editName,
    email:state.editEmail,
    password: state.editPassword,
    avatar: state.editAvatar,
    role: state.editRole
  }
  
  let editMode = null;
  if (props.location.pathname === "/users/newUser") {
    editMode = false;
  }
  else {
    editMode = true;
  }
  useEffect(() => {
    if (userId !== null) {
      dispatch(getUser(userId));
      localStorage.setItem("userEditId", userId);
    } else {
      dispatch(getUser(localStorage.userEditId * 1));
    }
  }, [dispatch, userId])

  function toogleVisible() {
    visible ? setVisible(false) : setVisible(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!editMode) {
      const formData = new FormData();
      formData.append('name', newUser.name);
      formData.append('email', newUser.email);
      formData.append('password', newUser.password);
      formData.append('avatar', newUser.avatar);
      formData.append('role', newUser.role)
      for (var [key, value] of formData.entries()) {
        console.log(key, value);
      }
      dispatch(register(formData));
    }
    else {
      const formData = new FormData();
      formData.append('id', userId);
      formData.append('name', editUserData.name);
      formData.append('email', editUserData.email);
      formData.append('password', editUserData.password);
      formData.append('avatar', avatar);
      formData.append('role', editUserData.role)
      dispatch(editUser(formData))
    }
  }
  function upload(e) {
    setImg(URL.createObjectURL(e.target.files[0]))
    dispatch(changeNewUser('avatar', e.target.files[0]))
    setAvatar(e.target.files[0]);
  }
  console.log(avatar)

  return (
    <>
      <Header />
      <section className={"container " + classes.container}>
        <div className={classes.top}>
          <ArrowBack />
          <h2 className={classes.title}>Пользователь</h2>
        </div>
        <section className={classes.wrapper}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.leftSide}>
              <div className={classes.formImage}>
                <img
                  src={editMode && state.userData.avatar && img===defaultAvatar ? editUserData.avatar : img}
                  className={classes.avatar}
                  alt="#"
                />
              </div>
              <div className={classes.fileWrap}>
                <UploadIcon />
                <label className={classes.labelFile}>
                  Загрузить аватар
                  <input type="file" accept=".png, .jpg, .jpeg"
                name="photo" className={classes.fileInput} onChange={(e) => upload(e)} />
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
                onChange={editMode ? (e) => dispatch(changeNewUser('editName', e.target.value)) : (e) => dispatch(changeNewUser('name', e.target.value))}
                placeholder="Введите имя и фамилию"
                id="newName"
                value={editMode ? editUserData.name : newUser.name}
              />
              <label className={classes.label} htmlFor="newEmail">
                E-mail
              </label>
              <input
                className={classes.input + " Input"}
                type="email"
                onChange={editMode ? (e) => dispatch(changeNewUser('editEmail', e.target.value)) : (e) => dispatch(changeNewUser('email', e.target.value))}
                placeholder="Введите e-mail"
                id="newEmail"
                value={editMode ? editUserData.email : newUser.email}
              />
              <label className={classes.label} htmlFor="newRole">
                Роль
              </label>
              <Select
                className={classes.input}
                options={roles}
                inputValue={editMode ? chooseRole(editUserData.role): ''}
                id="newRole"
                onChange={ editMode ? (e) => dispatch(changeNewUser('editRole', e.value))
                :  (e) => dispatch(changeNewUser('role', e.value))}
                placeholder="Выберите роль"
              />
              <label className={classes.label} htmlFor="newPassword">
                Пароль
                <button
                  onClick={() => toogleVisible()}
                  className={classes.showBtn}
                >
                  <img src={visible ? eyeOpen : eyeClose} alt="#" />
                </button>
              </label>
              <input
                className={classes.input + " Input"}
                type={visible ? "text" : "password"}
                id="newPassword"
                placeholder="Введите пароль"
                value={editMode ? editUserData.password : newUser.password}
                onChange={editMode ? (e) => dispatch(changeNewUser('editPassword', e.target.value))
                : (e) => dispatch(changeNewUser('password', e.target.value))}
              />
              <span>{error ? error:''}</span>
              <div className={classes.buttonsButtom}>
                <button
                  type="submit"
                  className={"default-btn " + classes.btnSave}
                >
                  <img src={saveIcon} alt="save" className={classes.save} />
                  Сохранить
                </button>
                {editMode ? (
                  <button className={"default-btn " + classes.btnDelete} onClick={() => dispatch(openAlert('isOpenedUser'))}>
                    <img
                      src={deleteIcon}
                      alt="delete"
                      className={classes.delete}
                    />
                    Удалить профиль
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </form>
        </section>
      </section>
      <AlertAccept type='user' id={userId} />
    </>
  );
};
export default NewUserPage;
