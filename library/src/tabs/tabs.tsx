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

const Tabs: React.FC<Props> = ({ children, selectedIndex = 0, onChange }) => {
    const classes = useStyles();

    const handleClick = (index: number) => onChange(index);

    return (
        <div className={classes.tabs}>
            {React.Children.map(children, (child: React.ReactElement, index: number) => {
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
type Props = {
    selectedIndex?: number,
    onChange: (value: number) => void
}
