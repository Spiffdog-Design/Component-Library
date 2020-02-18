import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSpring, animated } from 'react-spring';

const useStyles = createUseStyles({
    root: {
        margin: 20,
        opacity: 0,
    }
});

const View: React.FC<Props> = ({ children }) => {
    const classes = useStyles();
    const style = useSpring({ opacity: 1, from: { opacity: 0 } })
    return (
        <animated.div style={style} className={classes.root}>
            {children}
        </animated.div>
    )
}

export default View;
type Props = {
}
