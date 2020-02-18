import React from 'react';
import { createUseStyles, ThemeProvider } from 'react-jss';
import defaultTheme, { Theme, ThemeOverride } from './theme';

const merge = require('deepmerge');

const useStyles = createUseStyles((theme: Theme) => ({
    '@global': theme.global,
    '@import': new Set(theme.imports)
}));

interface ProviderProps {
    children: React.ReactNode,
    theme: Theme
}
interface ContainerProps {
    children: React.ReactNode
}

export const mergeTheme = (themeFn?: (theme: Theme) => ThemeOverride) => {
    const t = (themeFn == null) ? null : themeFn(defaultTheme);
    return (t == null)
        ? defaultTheme
        : merge(defaultTheme, t);
}

const ThemeRoot: React.FC<ContainerProps> = ({ children }) => {
    useStyles();
    return <React.Fragment>{children}</React.Fragment>;
}

const Provider: React.FC<ProviderProps> = ({ children, theme }) => {
    return (
        <ThemeProvider theme={theme}>
            <ThemeRoot>
                {children}
            </ThemeRoot>
        </ThemeProvider>
    );
}

export default Provider;
