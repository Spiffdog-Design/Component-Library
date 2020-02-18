import Colors from './colors';
import { DeepPartial } from 'ts-essentials';

const colorConfig = {
    alert: Colors.dark.red[1],
    active: Colors.dark.yellow[1],
    warning: Colors.dark.yellow[1],
    primary: Colors.dark.blue[1],
    secondary: Colors.white,

    background: {
        primary: Colors.white,
        secondary: Colors.light.gray[2],
        disabled: Colors.light.gray[3],
    },

    font: {
        primary: Colors.black,
        secondary: Colors.white,
        disabled: Colors.dark.gray[1],
    },
};

const theme = ({
    imports: [
        'url(\'https://fonts.googleapis.com/css?family=Open+Sans:600|Roboto:400,700&display=swap\')',
    ],
    global: {
        'body, html': {
            backgroundColor: '#ffffff',
            fontSize: 14,
            fontFamily: '\'Roboto\', sans-serif',
            margin: 0,
            padding: 0,
            height: '100%',
            width: '100%',
            '& #root': {
                height: '100%',
                width: '100%',
            }
        },
        'a': {
            textDecoration: 'none',
            color: colorConfig.font.primary,
        },
        'strong': {
            fontWeight: 700
        }
    },
    colors: {
        ...colorConfig
    },
    components: {
        grid: {
            gutter: 8
        }
    }
});

export type Theme = typeof theme;
export type ThemeOverride = DeepPartial<typeof theme>;
export default theme;
