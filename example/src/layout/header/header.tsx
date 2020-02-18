import React from 'react';
import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Tabs, Tab, Icon, IconTypes } from '@spiffdog/spiffy';

const useStyles = createUseStyles({
    constainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        justifyContent: 'space-between',
        backgroundColor: '#fcfcfc',
        color: '#000000',
        fontSize: 15,
    },
    left: {
        flex: '0 0 150px',
        padding: '10px 25px',
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
        padding: '10px 25px',
    },
    logo: {
        height: 40,
    },
    tabLabel: {
        padding: 4
    },
});

interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ children }) => {
    const [tab, setTab] = React.useState(0);
    const classes = useStyles();

    const handleChange = (value: number) => setTab(value)

    return (
        <header className={cn(classes.constainer, classes.header)}>
            <div className={cn(classes.constainer, classes.left)}>
                <img className={classes.logo} src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Spiffdog Design Logo" />
            </div>
            <div className={cn(classes.constainer, classes.center)}>
                <Tabs selectedIndex={tab} onChange={handleChange}>
                    <Tab>
                        <Icon name={IconTypes.HOME} size={20}></Icon>
                        <span className={classes.tabLabel}>Home</span>
                    </Tab>
                    <Tab>
                        <Icon name={IconTypes.INFO} size={20}></Icon>
                        <span className={classes.tabLabel}>About</span>
                    </Tab>
                    <Tab>
                        <Icon name={IconTypes.POWER} size={20}></Icon>
                        <span className={classes.tabLabel}>Components</span>
                    </Tab>
                </Tabs>
            </div>
            <div className={cn(classes.constainer, classes.right)}>
                {children}
            </div>
        </header>
    );
}

export default Header;
