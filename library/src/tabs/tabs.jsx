import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    tabs: {
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'row',
        justifyContent: 'stretch',
        height: 45,
        width: '100%',
    }
});

const Tabs = ({ children, selectedIndex = 0, onChange }) => {
    const classes = useStyles();

    const handleClick = index => onChange(index);

    return (
        <div className={classes.tabs}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    index,
                    selected: index === selectedIndex,
                    onClick: handleClick
                });
            })}
        </div>
    );
}

export default Tabs;
