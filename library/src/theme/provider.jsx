import React from 'react';
import { createUseStyles, ThemeProvider } from 'react-jss';
import defaultTheme from './theme';

const merge = require('deepmerge');

const useStyles = createUseStyles(theme => {
    const globals = { ...theme.global };
    const imports = [...new Set(theme.imports)];

    return {
        '@import': imports,
        '@global': globals,
    }
});

export const mergeTheme = (themeFn => {
    const t = (themeFn == null) ? null : themeFn(defaultTheme);
    return (t == null)
        ? defaultTheme
        : merge(defaultTheme, t);
})

const ThemeRoot = ({ children }) => {
    useStyles();
    return <React.Fragment>{children}</React.Fragment>
}

const Provider = ({ children, theme }) => (
    <ThemeProvider theme={theme}>
        <ThemeRoot>
            {children}
        </ThemeRoot>
    </ThemeProvider>
);

export default Provider;
