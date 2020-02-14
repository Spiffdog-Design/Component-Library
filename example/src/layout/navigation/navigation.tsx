import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    navigation: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 8em',
        order: -1,

        backgroundColor: '#999999',
        color: '#ffffff',
        padding: 25,
    }
});

interface NavigationProps { }

const Navigation: React.FC<NavigationProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <nav className={classes.navigation}>
            {children}
        </nav>
    );
}

export default Navigation;
