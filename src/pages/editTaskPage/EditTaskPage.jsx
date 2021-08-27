import classes from '../newTaskPage/newTaskPage.module.scss';
import Select from 'react-select';
import ArrowBack from '../../components/arrowBack/arrowBack';
import DateInput from '../../components/input/dateInput';
import FileInfo from '../../components/fileInfo/fileInfo';
import saveIcon from '../../assets/save.png'
import { bigSelect } from '../../utils/customStylesSelect';
import Pin from '../../assets/pin.png'
import { chooseType } from '../../utils/chooseType';
import { useState } from 'react';
import { editTaskRequest } from '../../redux/actions/editTaskPage-actions';


const EditTaskPage = (props) => {
    console.log(typeof(props.state.dateExpired))
    const [files,setFile] = useState(props.task.files);
    function deleteFile(id) {
        let newFiles = Object.create(files)
        newFiles.splice(id, 1);
        setFile(newFiles)
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(props.state,files)
        const data = new FormData();
        data.append('name', props.state.name);
        data.append('type', props.state.type);
        data.append('description', props.state.description);
        data.append('author', props.state.author);
        data.append('executor', props.state.executor);
        data.append('dateExpired', props.state.dateExpired);
        for (let i = 0; i < files.length; i++) {
            data.append('files', files[i]);
        }
        props.dispatch(editTaskRequest(props.task._id,data))
    }
    if (props.task === null) { return ('yt yfqltyj') }
    else {
        return (
            <section className={'container ' + classes.wrapper}>
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
                            placeholder='Выберите тип контента'
                            styles={bigSelect}
                            defaultInputValue={chooseType(props.task.type)}
                            className={classes.input}
                            onChange={(e) => props.inputChange('type', e.value)} />
                        <label className={classes.label} htmlFor="contentTitle">
                            Заголовок
                        </label><br />
                        <input className={classes.input + " Input"}
                            type="text"
                            id="contentTitle"
                            placeholder='Введите заголовок задачи'
                            value={props.state.name}
                            onChange={(e) => props.inputChange('name', e.target.value)} /><br />
                        <label className={classes.label} htmlFor="contentDescription">
                            Описание
                        </label><br />
                        <textarea
                            className={classes.textarea + " Input"}
                            resize='none'
                            type="textarea" id="contentDescription"
                            placeholder='Опишите требования'
                            value={props.state.description}
                            onChange={(e) => props.inputChange('description', e.target.value)} />
                        {files[0] ?
                            files.map((el, index) => <FileInfo action={deleteFile} type={el.mimetype?el.mimetype:el.type} name={el.filename?el.filename:el.name} size={el.size} key={index} id={index} />)
                            : ''}

                        <div className={classes.fileWrap}>
                            <img src={Pin} alt="#" />
                            <label className={classes.labelFile}>
                                Прикрепить файл
                                <input type="file" accept=".png, .jpg, .jpeg,.doc,.avi,.wav,.mp3,.mov,.rar,.zip,.pdf,.docx,.xls"
                                    name="photo" className={classes.fileInput}
                                onChange={(e) => setFile((files) => [...files, e.target.files[0]])} 
                                />
                            </label>
                        </div>
                    </section>
                    <section className={classes.rightSide}>
                        <label className={classes.label}>Срок выполнения</label>
                        <DateInput
                            className={classes.inputRight}
                            text='Укажите дату'
                            styles='middle'
                            value={typeof (props.state.dateExpired) === 'string' && props.state.dateExpired!==''? new Date(props.state.dateExpired) : props.state.dateExpired}
                            action={props.dateChange} />
                        <label className={classes.label}>Инициатор</label>
                        <Select
                            className={classes.inputRight}
                            placeholder='Выберите инициатора'
                            defaultInputValue={props.task.author.name}
                            defaultValue={props.task.author._id}
                            options={props.userOptions}
                            onChange={(e) => props.inputChange('author', e.value)} />
                        <label className={classes.label}>Ответственный</label>
                        <Select
                            className={classes.inputRight}
                            placeholder='Выберите ответственного'
                            defaultInputValue={props.task.executor.name}
                            defaultValue={props.task.executor._id}
                            options={props.userOptions}
                            onChange={(e) => props.inputChange('executor', e.value)} />
                    </section>
                    <button
                        type='submit'
                        className={"default-btn " + classes.btnSave} >
                        <img src={saveIcon} alt="save" className={classes.save} />
                        Изменить задачу
                    </button>
                </form>
            </section>
        )
    }
}

export default EditTaskPage;