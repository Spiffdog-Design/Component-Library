import { Theme, ThemeOverride } from '@spiffdog/spiffy';

const theme = (theme: Theme): ThemeOverride => ({
    imports: theme.imports != null ? [
        'url(\'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap\')',
    ] : []
});

export default theme;
