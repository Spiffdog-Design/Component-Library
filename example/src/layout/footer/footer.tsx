import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    footer: {
        display: 'flex',
        flexDirection: 'row',

        backgroundColor: '#333333',
        color: '#ffffff',
        padding: 25,
    }
});

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            Footer
        </footer>
    );
}

export default Footer;
