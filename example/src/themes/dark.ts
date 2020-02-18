import { Theme, ThemeOverride } from '@spiffdog/spiffy';

const theme = (theme: Theme): ThemeOverride => ({
    imports: theme.imports != null ? [
        'url(\'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap\')',
    ] : [],
    global: {
        'body, html': {
            backgroundColor: '#000000',
        },
        'a': {
            color: '#ffffff',
        }
    },
    colors: {
        background: {
            primary: '#333'
        },
        font: {
            primary: '#fff'
        }
    }
});

export default theme;
