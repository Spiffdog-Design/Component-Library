import React from 'react';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import { createUseStyles } from 'react-jss';

import { Accordian } from '@spiffdog/spiffy';

const useStyles = createUseStyles({
    editor: {
        display: 'flex',
        backgroundColor: '#333333',
        flexDirection: 'column',
        flex: '0 0 10em',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottom: 'none',
        borderTop: '1px solid #cccccc',
        borderLeft: '1px solid #cccccc',
        borderRight: '1px solid #cccccc',
        color: '#444444',
        cursor: 'pointer',
        justifyContent: 'flex-start',
        outline: 'none',
        padding: 12,
    },
    preview: {
        backgroundColor: '#f5f7fb',
        border: '1px solid #cccccc',
        padding: 12,
        marginBottom: 8
    }
});

const Previewer = ({ code, disabled = false, noInline = false, scope }) => {
    const classes = useStyles();

    return (
        <LiveProvider code={code} scope={scope} disabled={disabled} noInline={noInline}>
            <div className={classes.header}>Preview</div>
            <div className={classes.preview}>
                <LivePreview />
            </div>
            <Accordian title="Code">
                <div className={classes.editor}>
                    <LiveEditor />
                </div>
            </Accordian>
            <LiveError />
        </LiveProvider>
    );
}

export default Previewer;
