import {NavLink} from 'react-router-dom';
import classes from './notification.module.scss';
import iconTask from '../../assets/newtask.png';
import audioIcon from '../../assets/audio_not.png';
import videoIcon from '../../assets/video_not.png';
import commentIcon from '../../assets/comment.png';
import photoIcon from '../../assets/photo_not.png';



const NotificationIcon = type => {
    switch (type) {
        case 'comment':
            return (
                commentIcon
            )
        case 'video':

            return (
                videoIcon
            )
        case 'audio':

            return (
                audioIcon
            )
        case 'photo':

            return (
                photoIcon
            )
        case 'newTask':

            return (
                iconTask
            )
        default:
            return (
                commentIcon
            )
    }
}
const NotificationText = (type, text, userName, taskName) => {
    if (!text) {
        switch (type) {
            case 'comment':
                return (
                    <p className={classes.text}>Новый комментарий в задаче <span className={classes.important}>{taskName}</span></p >
                )
            case 'newTask':
                return (
                    <p className={classes.text}><span className={classes.important}>{userName}</span> загрузил контент в задаче <span className={classes.important}>{taskName}</span></p >
                )
            default:
                return (
                    <p className={classes.text}><span className={classes.important}>{userName}</span> поручил вам новую задачу</p >
                )
        }
    }
    else {
        return (
            <p className={classes.text}>
                {text}
            </p>
        )
    }
}

const Notification = ({ type, date = '', text, userName, taskName }) => {
    return (
        <NavLink to='/tasks' className={classes.wrapper}>
            <div className={classes.imgWrap}>
                <img src={NotificationIcon(type)} alt="NotificationIcon" />
            </div>
            <div className={classes.content}>
                {NotificationText(type, text, userName, taskName)}
                <p className={classes.date}>
                    {date}
                </p>
            </div>
        </NavLink>
    )
}
export default Notification;