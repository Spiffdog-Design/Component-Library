import { mergeTheme } from 'component-library';

const theme = ({
    global: {
        'body, html': {
            backgroundColor: 'black',
            margin: 0,
            padding: 0,
            height: '100%',
            width: '100%',
            '& #root': {
                height: '100%',
                width: '100%',
            }
        }
    },
    colors: {
        background: {
            default: '#333'
        },
        font: {
            default: '#fff'
        }
    }
});

export default mergeTheme(theme);
