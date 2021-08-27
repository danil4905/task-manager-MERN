import classes from './header-notification.module.scss';
import NotificationIcon from '../../../../assets/notification.png';
import {NavLink} from 'react-router-dom';

const HeaderNotification = props => {
    return(
        <div className={classes.notification__link}>
            <NavLink exact to='/notifications' className={classes.notification__linkItem} activeClassName={classes.activeNoti}>
                <img src={ NotificationIcon } alt='#' />
            </NavLink>
            {!props.count ?'' 
            : <div className={classes.count}>{props.count}</div> }
        </div>
    )
}
export default HeaderNotification;