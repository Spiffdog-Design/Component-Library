import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from 'src';

type ButtonProps = {
    label: string
}

const useStyles = createUseStyles({
    button: {
        background: ({ theme }: { theme: Theme }) => theme.colors.background.primary,
        color: ({ theme }: { theme: Theme }) => theme.colors.font.primary,
    }
});

const Button: React.FC<ButtonProps> = (props) => {
    const { label, ...rest } = props;

    const theme = useTheme();
    const classes = useStyles({ ...rest, theme });

    return (
        <button className={classes.button}>{label}</button>
    );
}

export default Button;
