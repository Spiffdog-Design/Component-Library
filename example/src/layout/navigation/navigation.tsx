import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        flex: '0 0 1em',
        order: -1,

        backgroundColor: '#ffffff',
        color: '#000000',
        padding: 25,
        '& a': {
            padding: 12,
        }
    },
    '@media (min-width: 768px)': {
        navigation: {
            flexDirection: 'column',
            flex: '0 0 150px',
            '& a': {
                padding: 4
            }
        },
    },

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
