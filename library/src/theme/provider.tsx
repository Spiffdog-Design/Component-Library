import React from 'react';
import { createUseStyles, ThemeProvider } from 'react-jss';
import defaultTheme, { Theme } from './theme';

const merge = require('deepmerge');

const useStyles = createUseStyles((theme: Theme) => ({
    '@global': {
        ...theme.global
    }
}));

interface ProviderProps {
    children: React.ReactNode,
    theme: Theme
}
interface ContainerProps {
    children: React.ReactNode
}

const ThemeContainer: React.FC<ContainerProps> = ({ children }) => {
    useStyles();
    return <React.Fragment>{children}</React.Fragment>;
}

const Provider: React.FC<ProviderProps> = ({ children, theme }) => {
    const merged = merge(defaultTheme, theme);
    return (
        <ThemeProvider theme={merged}>
            <ThemeContainer>
                {children}
            </ThemeContainer>
        </ThemeProvider>
    );
}

export default Provider;
