import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    header: {
        display: 'flex',
        flexDirection: 'row',

        backgroundColor: '#333333',
        color: '#ffffff',
        padding: 25,
    }
});

interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            {children}
        </header>
    );
}

export default Header;
