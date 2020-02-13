import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { Theme } from 'src';

const useStyles = createUseStyles({
    grid: {
        display: 'flex',
        margin: ({ theme }: { theme: Theme }) => (theme.grid.gutter / 2),
        background: ({ theme }: { theme: Theme }) => theme.colors.background.default,
        color: ({ theme }: { theme: Theme }) => theme.colors.font.default,
        fontSize: 12,
        alignItem: (props: GridProps) => props.align || Align.CENTER,
        flexDirection: (props: GridProps) => props.direction || Direction.ROW,
        justifyContent: (props: GridProps) => props.justify || Justify.FLEX_START,
        wrap: (props: GridProps) => Boolean(props.wrap) ? 'wrap' : 'nowrap',
    }
});

const Grid: React.FC<GridProps> = ({ children, ...props }) => {
    const theme = useTheme();
    const classes = useStyles({ ...props, theme });

    return (
        <div className={classes.grid}>
            {children}
        </div>
    );
}

interface GridProps {
    children?: React.ReactNode,
    align?: Align,
    direction?: Direction,
    justify?: Justify,
    wrap?: boolean,
}

export enum Align {
    BASELINE = 'baseline',
    CENTER = 'center',
    FLEX_END = 'flex-end',
    FLEX_START = 'flex-start',
    STRETCH = 'stretch',
}

export enum Direction {
    COLUMN = 'column',
    COLUMN_REVERSE = 'column-reverse',
    ROW = 'row',
    ROW_REVERSE = 'row-reverse',
}

export enum Justify {
    CENTER = 'center',
    FLEX_END = 'flex-end',
    FLEX_START = 'flex-start',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
}

export default Grid;
