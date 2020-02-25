import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    main: {
        flex: 1,
        backgroundColor: '#ffffff',
    }
});

const Main = ({ children }) => {
    const classes = useStyles();

    return (
        <main className={classes.main}>
            {children}
        </main>
    );
}

export default Main;
