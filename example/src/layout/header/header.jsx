import React from 'react';
import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Tabs, Tab, Icon, IconTypes, IconSizes } from '@spiffdog/spiffy';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#fcfcfc',
        borderBottom: '1px solid #cccccc',
        color: '#000000',
        fontSize: 15,
        justifyContent: 'space-between',
    },
    left: {
        flex: '0 0 50px',
        padding: '0 25px',
        '& img': {
            padding: '0 45px'
        }
    },
    center: {
        alignSelf: 'flex-end',
        flex: 3,
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: '0 0 150px',
        padding: '0 25px',
    },
    logo: {
        height: 40,
    },
    tabLabel: {
        padding: 4
    },
});

const Header = ({ children }) => {
    const [tab, setTab] = React.useState(0);
    const classes = useStyles();

    const handleChange = value => setTab(value)

    return (
        <header className={cn(classes.container, classes.header)}>
            <div className={cn(classes.container, classes.left)}>
                <img className={classes.logo} src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Spiffdog Design Logo" />
                <Tabs selectedIndex={tab} onChange={handleChange}>
                    <Tab>
                        <Icon icon={IconTypes.solid.home} size={IconSizes.md}></Icon>
                        <span className={classes.tabLabel}>Home</span>
                    </Tab>
                    <Tab>
                        <Icon icon={IconTypes.solid.info_circle} size={IconSizes.md}></Icon>
                        <span className={classes.tabLabel}>About</span>
                    </Tab>
                    <Tab>
                        <Icon icon={IconTypes.solid.code} size={IconSizes.md}></Icon>
                        <span className={classes.tabLabel}>Components</span>
                    </Tab>
                </Tabs>
            </div>
            <div className={cn(classes.container, classes.right)}>
                {children}
            </div>
        </header>
    );
}

export default Header;
