import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
    drawer: {
        display: 'flex',
        flexDirection: 'row',
        flex: '0 0 1em',

        backgroundColor: '#efefef',
        color: '#000000',
        padding: 25,
        '& a': {
            padding: 12,
        }
    },
    '@media (min-width: 768px)': {
        drawer: {
            flexDirection: 'column',
            flex: '0 0 150px',
            '& a': {
                padding: 4
            }
        },
    },
}));

const Drawer = ({ children }) => {
    const classes = useStyles();

    return (
        <aside className={classes.drawer}>
            Drawer
            {children}
        </aside>
    );
}

export default Drawer;
