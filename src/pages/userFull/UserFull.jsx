import classes from "./userFull.module.scss";

const UserFull = (props) => {
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
                  src={avatar}
                  className={classes.avatar}
                  alt="#"
                />
              </div>
            </div>
            <div className={classes.rightSide}>
              <span>{error ? error : ""}</span>
              <div className={classes.buttonsButtom}>
                <button
                  type="submit"
                  className={"default-btn " + classes.btnSave}
                >
                  <img src={saveIcon} alt="save" className={classes.save} />
                  Сохранить
                </button>
                {editMode ? (
                  <button
                    className={"default-btn " + classes.btnDelete}
                    onClick={() => dispatch(openAlert("isOpenedUser"))}
                  >
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
      <AlertAccept type="user" id={userId} />
    </>
  );
};

export default UserFull;
