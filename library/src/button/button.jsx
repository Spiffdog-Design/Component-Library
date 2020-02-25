import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(theme => ({
    button: {
        background: theme.colors.background.primary,
        color: theme.colors.font.primary,
    }
}));

const Button = (props) => {
    const { children, ...rest } = props;

    const theme = useTheme();
    const classes = useStyles({ ...rest, theme });

    return (
        <button className={classes.button} {...props}>{children}</button>
    );
}

export default Button;
