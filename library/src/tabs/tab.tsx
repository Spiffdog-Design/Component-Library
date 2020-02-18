import React from 'react';
import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { useTransition, animated } from 'react-spring'

import { Theme } from 'src';

const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        backgroundColor: theme.colors.background.primary,
        borderBottom: `1px solid ${theme.colors.background.secondary}`,
        borderTop: `1px solid ${theme.colors.background.secondary}`,
        color: theme.colors.font.primary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    children: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        padding: 8,
    },
    indicator: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: theme.colors.active,
        height: 0,
        width: '100%',
    },
    selected: {
        backgroundColor: theme.colors.background.primary,
        color: theme.colors.primary,
    }
}));

const Tab: React.FC<Props> = ({ index = 0, children, selected, onClick }) => {
    const classes = useStyles();
    const handleClick = () => onClick && onClick(index);
    const transitions = useTransition(selected, null, {
        from: { opacity: 0, height: 0 },
        enter: { opacity: 1, height: 2 },
        leave: { opacity: 0, height: 0 },
    })

    return (
        <div className={cn(classes.root, { [classes.selected]: selected })} onClick={handleClick}>
            <div className={classes.children}>{children}</div>
            {transitions.map(({ item, key, props }) => (
                item && <animated.div key={key} style={props} className={classes.indicator}></animated.div>
            ))}
        </div>
    )
}

export default Tab;
type Props = {
    index?: number,
    selected?: boolean,
    onClick?: (index: number) => void
}
