import React from 'react';
import Logo from './logo';
import HeaderNav from './components/headerNav/headerNav';
import HeaderUser from './components/headerUser/headerUser';
import classes from './header.module.scss'
import HeaderNotification from './components/headerNotification/headerNotification';
import { useSelector } from 'react-redux';

const Header = (props) => {
    const userAccessRole = useSelector(state => state.auth.user.role);
    return (
        <header className={classes.header}>
            <div className='container'>
                <div className={classes.container}>
                    <div className={classes.leftSide}>
                        <Logo />
                        <HeaderNav userRole={userAccessRole}/>
                    </div>
                    <div className={classes.rightSide}>
                        <HeaderNotification count={1} />
                        <HeaderUser />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;