import React from 'react';
import { createUseStyles } from 'react-jss';

import { Button, Accordian, View } from '@spiffdog/spiffy';

import Previewer from '../../../components/previewer';

const useStyles = createUseStyles({
    content: {
        margin: 16,
    },
});

const AccordianView = () => {
    const classes = useStyles();
    const scope = { Button, Accordian, classes };

    const code = `
    <Accordian title="Accordian Title">
        <div className={classes.content}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget diam felis. Aliquam faucibus id arcu a porta. Donec et euismod dui. Aenean vel odio sit amet enim ornare lobortis sit amet et augue. Sed neque justo, suscipit suscipit faucibus tincidunt, aliquet eget ex. Maecenas eget mauris sit amet ipsum pellentesque auctor sodales id turpis. Nullam suscipit ultrices ornare. Donec tincidunt mattis lorem, et egestas purus efficitur vel. Nunc luctus turpis non orci laoreet aliquam. Donec tempor tristique scelerisque.</p>
            <p>Etiam ornare augue neque, et tincidunt nisi lobortis non. Maecenas sed dignissim velit, sit amet consequat est. Integer quis lorem augue. Sed quis augue et nibh facilisis semper et nec eros. Maecenas placerat lacus ut vulputate interdum. Vivamus congue ipsum vitae varius cursus. Praesent a erat pulvinar, malesuada mi ac, efficitur enim. Sed elementum vestibulum sollicitudin. Maecenas hendrerit, urna eget commodo pellentesque, ligula nibh accumsan magna, vel dignissim lacus magna eu neque.</p>
            <p>Phasellus dictum lectus sapien. Aenean viverra diam et arcu dignissim bibendum. Nam eget elementum erat. Phasellus tempor mauris id mi condimentum cursus. Nam porta non lorem et iaculis. Suspendisse urna ante, ornare ac sapien ac, volutpat blandit justo. Ut viverra ex mi. Duis ut nisl vitae arcu eleifend lobortis. Quisque eu orci sed tellus faucibus viverra.</p>
        </div>
    </Accordian>
    `;

    return (
        <View>
            <Previewer code={code} scope={scope} />
        </View>
    );
}

export default AccordianView;
