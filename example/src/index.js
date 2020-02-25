import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider, mergeTheme } from '@spiffdog/spiffy';
import App from './app';
import { default as themeFn } from './themes/default';
import { default as darkFn } from './themes/dark';

import * as serviceWorker from './serviceWorker';

const themes = [
    { name: 'Default', theme: mergeTheme(themeFn) },
    { name: 'Dark', theme: mergeTheme(darkFn) },
]

const Main = () => {
    const [displayTheme, setDisplayTheme] = React.useState(themes[0]);

    const handleThemeSelect = name => {
        const newTheme = themes.find(theme => theme.name === name);
        if (newTheme != null) {
            setDisplayTheme(newTheme);
        }
    }

    return (
        <ThemeProvider theme={displayTheme.theme}>
            <App
                theme={displayTheme.theme}
                themes={themes.map(t => t.name)}
                onThemeSelect={handleThemeSelect}
            />
        </ThemeProvider>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
