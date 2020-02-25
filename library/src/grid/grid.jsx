import React from 'react';
import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Align, Direction, Justify } from './constants';
import Item from './item';

const useStyles = createUseStyles(theme => ({
    grid: {
        display: 'flex',
        margin: theme.components.grid.gutter / 2,
        background: theme.colors.background.primary,
        color: theme.colors.font.primary,
        alignItem: ({ align }) => align || Align.CENTER,
        flexDirection: ({ direction }) => direction || Direction.ROW,
        justifyContent: ({ justify }) => justify || Justify.FLEX_START,
        wrap: ({ wrap }) => Boolean(wrap) ? 'wrap' : 'nowrap',
    }
}));

const Grid = ({ children, className, ...props }) => {
    const classes = useStyles({ ...props });

    return (
        <div className={cn(className, classes.grid)}>
            {children}
        </div>
    );
}

Grid.Item = Item;
export default Grid;
