import React from 'react';
import { createUseStyles, ThemeProvider } from 'react-jss';
import defaultTheme, { Theme } from './theme';

const merge = require('deepmerge');

const useStyles = createUseStyles((theme: Theme) => ({
    '@global': theme.global,
    '@import': theme.imports
}));

interface ProviderProps {
    children: React.ReactNode,
    theme: Theme
}
interface ContainerProps {
    children: React.ReactNode
}

export const mergeTheme = (theme: Theme) => merge(defaultTheme, theme);

const ThemeRoot: React.FC<ContainerProps> = ({ children }) => {
    useStyles();
    return <React.Fragment>{children}</React.Fragment>;
}

const Provider: React.FC<ProviderProps> = ({ children, theme }) => {
    const merged = mergeTheme(theme);
    merged['@import'] = theme['@import'] != null ? theme['@import'] : defaultTheme['@import'];
    return (
        <ThemeProvider theme={merged}>
            <ThemeRoot>
                {children}
            </ThemeRoot>
        </ThemeProvider>
    );
}

export default Provider;
