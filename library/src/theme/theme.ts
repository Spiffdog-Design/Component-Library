const theme = ({
    imports: [
        'url(\'https://fonts.googleapis.com/css?family=Open+Sans:600|Roboto:400,700&display=swap\')',
    ],
    global: {
        'body, html': {
            fontSize: 14,
            fontFamily: '\'Roboto\', sans-serif',
        },
        strong: {
            fontWeight: 700
        }
    },
    colors: {
        background: {
            default: '#efefef',
            disabled: '#cccccc',
            alert: '#990000',
            warning: '#ffc107'
        },
        font: {
            default: '#000000',
            disabled: '#333333',
            alert: '#ffffff',
            warning: '#ffffff'
        }
    },
    grid: {
        gutter: 8
    }
});

export type Theme = (typeof theme);
export default theme;
