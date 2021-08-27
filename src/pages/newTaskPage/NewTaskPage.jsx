import Select from 'react-select';
import ArrowBack from '../../components/arrowBack/arrowBack';
import classes from './newTaskPage.module.scss';
import { bigSelect } from '../../utils/customStylesSelect';
import DateInput from '../../components/input/dateInput';
import Pin from '../../assets/pin.png'
import { useState } from 'react';
import FileInfo from '../../components/fileInfo/fileInfo';


const NewTaskPage = (props) => {
    const [files,setFile] = useState([]);
    function deleteFile (id) {
        let newFiles = Object.create(files)
        newFiles.splice(id,1);  
        setFile(newFiles)
    }
    console.log(files)
    return (
        <section className={'container '+classes.wrapper}>
            <div className={classes.backWrapper}>
                <ArrowBack />
                <span>К списку задач</span>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                <section className={classes.leftSide}>
                    <label className={classes.label} htmlFor="contentType">
                        Тип контента
                    </label>
                    <Select 
                        options={props.statusOptions} 
                        placeholder='Выберите тип контента' 
                        styles={bigSelect} 
                        className={classes.input}
                        onChange={(e) => props.inputChange('type', e.value)}/>
                    <label className={classes.label} htmlFor="contentTitle">
                        Заголовок
                    </label><br />
                    <input className={classes.input+ " Input"} 
                        type="text" 
                        id="contentTitle" 
                        placeholder='Введите заголовок задачи'
                        value={props.state.name}
                        onChange={(e) => props.inputChange('name',e.target.value)}/><br />
                    <label className={classes.label} htmlFor="contentDescription">
                        Описание
                    </label><br />
                    <textarea 
                        className={classes.textarea+ " Input"}
                        resize='none'
                        type="textarea" id="contentDescription"
                        placeholder='Опишите требования'
                        value={props.state.description}
                        onChange={(e) => props.inputChange('description',e.target.value)} />
                    {files[0]? 
                        files.map((el,index) => <FileInfo action={deleteFile} type={el.type} name={el.name} size={el.size} key={index} id={index} />)
                    : ''}
                    
                <div className={classes.fileWrap}>
                    <img src={Pin} alt="#" />
                    <label className={classes.labelFile}>
                        Прикрепить файл
                    <input type="file" accept=".png, .jpg, .jpeg,.doc,.avi,.wav,.mp3,.mov,.rar,.zip,.pdf,.docx,.xls"
                        name="photo" className={classes.fileInput}
                        onChange={(e) => setFile((files) => [...files,e.target.files[0]]) } />
                    </label>
                </div>
                </section>
                <section className={classes.rightSide}>
                <label className={classes.label}>Срок выполнения</label>
                <DateInput 
                    className={classes.inputRight} 
                    text='Укажите дату' 
                    styles='middle'
                    value={props.state.dateExpired}
                    action={props.dateChange} />
                <label className={classes.label}>Срок выполнения</label>
                <Select 
                    className={classes.inputRight} 
                    placeholder='Выберите инициатора' 
                    options={props.userOptions}
                    onChange={(e) => props.inputChange('author',e.value)}/>
                <label className={classes.label}>Срок выполнения</label>
                <Select 
                    className={classes.inputRight} 
                    placeholder='Выберите ответственного' 
                    options={props.userOptions}
                    onChange={(e) => props.inputChange('executor',e.value)}/>
                </section>
            </form>
        </section>
    )
}

export default NewTaskPage;