export default theme => ({
    imports: [
        'url(\'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap\')',
    ],
    global: {
        'body, html': {
            backgroundColor: '#000000',
            minWidth: 640
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
