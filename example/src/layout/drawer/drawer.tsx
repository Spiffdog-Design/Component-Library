import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    drawer: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 10em',

        backgroundColor: '#ececec'
    },
});

interface DrawerProps { }

const Drawer: React.FC<DrawerProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <aside className={classes.drawer}>
            Drawer
            {children}
        </aside>
    );
}

export default Drawer;
