import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Theme, ThemeProvider } from 'component-library';

import * as serviceWorker from './serviceWorker';

interface ThemeFormat {
    name: string,
    theme: Theme
}

const themes: ThemeFormat[] = [
    { name: 'Default', theme: {} },
    { name: 'Dark', theme: getDarkTheme() },
]

const Main = () => {
    const [displayTheme, setDisplayTheme] = React.useState(themes[0]);
    const handleThemeSelect = (name: string) => {
        const newTheme = themes.find(theme => theme.name === name);
        if (newTheme != null) {
            setDisplayTheme(newTheme);
        }
    }

    return (
        <ThemeProvider theme={displayTheme.theme}>
            <App themes={themes.map(t => t.name)} onThemeSelect={handleThemeSelect} />
        </ThemeProvider>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function getDarkTheme() {
    return ({
        colors: {
            background: {
                default: '#333'
            },
            font: {
                default: '#fff'
            }
        }
    });
}
