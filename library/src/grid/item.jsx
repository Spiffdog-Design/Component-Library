import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Align, Direction, Justify } from './constants';

const useStyles = createUseStyles(theme => ({
    item: {
        flex: '0 0 auto',
        minWidth: 0, // Fixes a bug not letting the child shrink the content
        padding: theme.components.grid.gutter / 2
    }
}));

const GridItem = ({ children, className, ...props }) => {
    const theme = useTheme();
    const classes = useStyles({ ...props, theme });

    return (
        <div className={classes.item}>

        </div>
    );

}

export default GridItem;
