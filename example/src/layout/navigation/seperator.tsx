import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    separator: {
        display: 'none',
    },
    '@media (min-width: 768px)': {
        separator: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            textAlign: 'left',
            marginTop: 24,
            '&::before, &::after': {
                content: '\'\'',
                flex: 1,
                borderBottom: '1px solid #000',
            },
            '&::before': {
                marginRight: '.25em',
            },
            '&::after': {
                marginLeft: '.25em',
            }
        }
    }
});

interface SeperatorProps {
    label?: string
}

const Seperator: React.FC<SeperatorProps> = ({ label }) => {
    const classes = useStyles();

    return (
        <div className={classes.separator}>{label}</div>
    );
}

export default Seperator;
