import React from 'react';

import { createUseStyles, useTheme } from 'react-jss';

import { Theme } from 'src';

const useStyles = createUseStyles({
    button: {
        background: ({ theme }: { theme: Theme }) => theme.colors.background.alert,
        color: ({ theme }: { theme: Theme }) => theme.colors.font.alert,
    }
});

export interface ButtonProps { }

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const theme = useTheme();
    const classes = useStyles({ ...props, theme });

    return (
        <button className={classes.button}>Press Me</button>
    );
}

export default Button;
