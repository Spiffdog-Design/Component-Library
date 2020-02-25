import React from 'react';
import cn from 'classnames';
import { useTransition, animated } from 'react-spring';
import { createUseStyles } from 'react-jss';

import Icon, { IconSizes, IconTypes } from '../icons/icon';

const useStyles = createUseStyles(theme => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        border: '1px solid #cccccc',
        color: '#444444',
        cursor: 'pointer',
        justifyContent: 'flex-start',
        outline: 'none',
        padding: 12,
        '& span': {
            marginLeft: 8,
        },
        '&.active, &:hover': {
            backgroundColor: '#f5f7fb',
        }
    },
    content: {
        backgroundColor: '#fefefe',
        borderTop: 'none',
        borderBottom: '1px solid #cccccc',
        borderLeft: '1px solid #cccccc',
        borderRight: '1px solid #cccccc',
        '&:before, &:after': {
            content: '\'\'',
            display: 'table',
        }
    },
    container: {
        marginBottom: theme.components.grid.gutter
    }
}));

const visibleStyle = { height: "auto", opacity: 1, overflow: "visible" };
const hiddenStyle = { opacity: 0, height: 0, overflow: "hidden" };

function getHeight(ref) {
    return ref.current != null
        ? ref.current.getBoundingClientRect().height
        : 0;
}

const Accordian = ({ title, children }) => {
    const classes = useStyles();
    const [visible, setVisible] = React.useState(false);
    const containerRef = React.useRef();
    const contentRef = React.useRef();

    const transitions = useTransition(visible, null, {
        enter: () => async (next, cancel) => {
            const height = getHeight(contentRef);
            cancel();

            await next({ height, opacity: 1, overflow: 'hidden' });
            await next(visibleStyle);
        },
        leave: () => async (next, cancel) => {
            const height = getHeight(containerRef);
            cancel();

            await next({ height, overflow: 'hidden' });
            await next(hiddenStyle);
        },
        from: visible ? hiddenStyle : visibleStyle,
        unique: true
    });

    return (
        <div className={classes.container}>
            <div className={cn(classes.header, { active: visible })} onClick={() => setVisible(v => !v)}>
                <Icon
                    icon={visible ? IconTypes.solid.angle_down : IconTypes.solid.angle_right}
                    size={IconSizes.md}
                />
                <span>{title}</span>
            </div>
            {transitions.map(({ item, props, key }) => (item)
                ? (
                    <animated.div
                        key={key}
                        ref={containerRef}
                        style={props}
                    >
                        <div
                            ref={contentRef}
                            className={classes.content}
                        >
                            {children}
                        </div>
                    </animated.div>
                ) : null
            )}
        </div>
    )
};

export default Accordian;
