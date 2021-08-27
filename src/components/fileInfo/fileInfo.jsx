import classes from './fileInfo.module.scss';
import { calculateSize } from '../../utils/calculateSize';
import FileType from '../fileType/fileType';
import deleteIcon from '../../assets/delete.svg'

const FileInfo = (props) => {
    return (
        <div className={classes.fileInfo}>
            <span className={classes.fileType}><FileType type={props.type}/></span>
            <span className={classes.fileName}>{props.name}</span>
            <span className={classes.fileSize}>{calculateSize(props.size)}</span>
            {props.action?
            <button className={"default-btn " + classes.fileDelete} onClick={() => props.action(props.id)} >
                    <img
                      src={deleteIcon}
                      alt="delete"
                      className={classes.delete}
                    />
                    Удалить
                  </button>:""}
        </div>
    )
}

export default FileInfo;