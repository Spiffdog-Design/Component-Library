import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from 'src/theme/theme';
import { Align, Direction, Justify } from './constants';

type GridItemProps = {
    children?: React.ReactNode,
    align?: Align,
    direction?: Direction,
    justify?: Justify,
    wrap?: boolean,
    className?: string,
}

const useStyles = createUseStyles({
    item: {
        flex: '0 0 auto',
        minWidth: 0, // Fixes a bug not letting the child shrink the content
        padding: ({ theme }: { theme: Theme }) => (theme.components.grid.gutter / 2)
    }
});

const GridItem: React.FC<GridItemProps> = ({ children, className, ...props }) => {
    const theme = useTheme();
    const classes = useStyles({ ...props, theme });

    return (
        <div className={classes.item}>

        </div>
    );

}

export default GridItem;
