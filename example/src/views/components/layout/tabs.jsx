import React from 'react';
import { createUseStyles } from 'react-jss';

import { Icon, IconSizes, IconTypes, Tab, Tabs, View } from '@spiffdog/spiffy';

import Previewer from '../../../components/previewer';

const useStyles = createUseStyles({
    label: {
        margin: '0 16px',
    },
});

const TabsView = () => {
    const classes = useStyles();
    const scope = { Icon, IconSizes, IconTypes, React, Tab, Tabs, classes };

    const code = `
    function TabsExample() {
        const [ tab, setTab ] = React.useState(0);

        return (
            <Tabs selectedIndex={tab} onChange={tab => setTab(tab)}>
                <Tab>
                    <Icon icon={IconTypes.solid.bath} size={IconSizes.md}></Icon>
                    <span className={classes.label}>Bathrooms</span>
                </Tab>
                <Tab>
                    <Icon icon={IconTypes.solid.bed} size={IconSizes.md}></Icon>
                    <span className={classes.label}>Bedrooms</span>
                </Tab>
                <Tab>
                    <Icon icon={IconTypes.solid.blender} size={IconSizes.md}></Icon>
                    <span className={classes.label}>Appliances</span>
                </Tab>
            </Tabs>
        )
    }
    `;

    return (
        <View>
            <Previewer code={code} scope={scope} />
        </View>
    );
}

export default TabsView;
