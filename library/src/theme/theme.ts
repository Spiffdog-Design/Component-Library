const theme = ({
    global: {
        body: {
            fontSize: 12,
            fontFamily: 'sans-serif',
        },
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
