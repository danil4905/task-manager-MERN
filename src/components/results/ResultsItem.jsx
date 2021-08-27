import classes from './results.module.scss';
import audioBg from '../../assets/bg.png'
import crossIcon from '../../assets/cross.svg'

const ResultsItem = (props) => {
    switch (props.type) {
        case 'image':
            return (
                <li className={classes.resultItem}>
                    <button><img src={crossIcon} alt="X" /></button>
                    <img className={classes.preview} src={'http://localhost:5000/static/'+props.file.filename} alt={props.file.originalname} />
                    <div className={classes.info}>
                        {/* <span className={classes.date}>{props.file.lastModifiedDate.toLocaleTimeString().slice(0,-3)+' '+props.file.lastModifiedDate.toLocaleDateString().split("/").join(".")}</span> */}
                        <span className={classes.fileName}>{props.file.originalname}</span>
                    </div>
                </li>
            )
        case 'video':
            return (
                <li className={classes.resultItem} >
                    <button><img src={crossIcon} alt="X" /></button>
                    <video width="100px" className={classes.preview}>
                        <source src={URL.createObjectURL(props.file)} />
                    </video>
                    <div className={classes.info}>
                        <span>{props.file.lastModifiedDate.toLocaleDateString().split("/").join(".")}</span>
                        <span className={classes.fileName}>{props.file.name}</span>
                    </div>
                </li>
            )
        case 'audio':
            return (
                <li className={classes.resultItem} >
                    <button><img src={crossIcon} alt="X" /></button>
                    <img src={audioBg} alt={props.file.name} className={classes.preview} />
                    <div className={classes.info}>
                        <span>{props.file.lastModifiedDate.toLocaleDateString().split("/").join(".")}</span>
                        <span className={classes.fileName}>{props.file.name}</span>
                    </div>
                </li>
            )
        default:
            break;
    }

}
export default ResultsItem;