import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    label: {
        display: 'flex',
    }
});

interface SeperatorProps {
    label?: string
}

const Seperator: React.FC<SeperatorProps> = ({ label }) => {
    const classes = useStyles();

    return (
        <div className={classes.label}>
            {label}
        </div>
    );
}

export default Seperator;
