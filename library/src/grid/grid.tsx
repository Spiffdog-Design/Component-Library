import React from 'react';
import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Theme } from 'src';
import { Align, Direction, Justify } from './constants';
import Item from './item';

type Props = {
    children?: React.ReactNode,
    align?: Align,
    direction?: Direction,
    justify?: Justify,
    wrap?: boolean,
    className?: string,
}

const useStyles = createUseStyles((theme: Theme) => ({
    grid: {
        display: 'flex',
        margin: theme.components.grid.gutter / 2,
        background: theme.colors.background.primary,
        color: theme.colors.font.primary,
        alignItem: (props: Props) => props.align || Align.CENTER,
        flexDirection: (props: Props) => props.direction || Direction.ROW,
        justifyContent: (props: Props) => props.justify || Justify.FLEX_START,
        wrap: (props: Props) => Boolean(props.wrap) ? 'wrap' : 'nowrap',
    }
}));

const Grid: React.FC<Props> = ({ children, className, ...props }) => {
    const classes = useStyles({ ...props });

    return (
        <div className={cn(className, classes.grid)}>
            {children}
        </div>
    );
}

Grid['Item'] = Item;
export default Grid;
