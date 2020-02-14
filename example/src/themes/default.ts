import { mergeTheme } from 'component-library';

const theme = ({
    global: {
        'body, html': {
            backgroundColor: 'white',
            margin: 0,
            padding: 0,
            height: '100%',
            width: '100%',
            '& #root': {
                height: '100%',
                width: '100%',
            }
        }
    }
})


export default mergeTheme(theme);
