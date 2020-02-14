import React from 'react';

import { createUseStyles, useTheme } from 'react-jss';

import { Theme } from 'src';

const useStyles = createUseStyles({
    button: {
        background: ({ theme }: { theme: Theme }) => theme.colors.background.alert,
        color: ({ theme }: { theme: Theme }) => theme.colors.font.alert,
    }
});

export interface ButtonProps {
    label: string
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { label, ...rest } = props;

    const theme = useTheme();
    const classes = useStyles({ ...rest, theme });

    return (
        <button className={classes.button}>{label}</button>
    );
}

export default Button;
