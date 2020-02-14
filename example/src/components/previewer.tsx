import React from 'react';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    editor: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 10em',

        backgroundColor: '#333333',
        width: 500
    },
});

interface PreviewerProps {
    code: string;
    scope?: { [key: string]: any };
    noInline?: boolean;
    disabled?: boolean;
}

const Previewer: React.FC<PreviewerProps> = (props: PreviewerProps) => {
    const classes = useStyles();
    const { code, disabled = false, noInline = false, scope } = props;

    return (
        <LiveProvider code={code} scope={scope} disabled={disabled} noInline={noInline}>
            <div className={classes.editor}>
                <LiveEditor />
            </div>
            <LiveError />
            <LivePreview />
        </LiveProvider>
    );
}

export default Previewer;
