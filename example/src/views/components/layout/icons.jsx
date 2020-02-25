import React from 'react';
import { createUseStyles } from 'react-jss';

import { Accordian, Icon, IconTypes, IconSizes, View } from '@spiffdog/spiffy';

import Previewer from '../../../components/previewer';

const useStyles = createUseStyles({
    icon: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0,40,100,.12)',
        borderRadius: 8,
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.05)',
        flexDirection: 'column',
        height: 85,
        justifyContent: 'space-around',
        margin: 8,
        padding: 8,
        width: 115,
        '& span': {
            fontSize: 11,
            margin: '4px 8px 0 8px',
            wordBreak: 'break-all'
        }
    },
    list: {
        display: 'flex',
        backgroundColor: '#f5f7fb',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

const ButtonView = () => {
    const classes = useStyles();
    const scope = { Icon, IconTypes, IconSizes };

    const code = `
    <Icon
        icon={IconTypes.regular.grin_tongue_squint}
        size={IconSizes.x3}
    />
    `;

    const { solid, regular } = IconTypes;

    return (
        <View>
            <Previewer code={code} scope={scope} />

            <Accordian title="Solid Icons">
                <div className={classes.list}>
                    {Object.keys(solid).map(key => {
                        const value = solid[key];
                        return (
                            <div key={key} className={classes.icon}>
                                <Icon icon={value} size={IconSizes.x2} />
                                <span>{key}</span>
                            </div>
                        )
                    })}
                </div>
            </Accordian>
            <Accordian title="Regular Icons">
                <div className={classes.list}>
                    {Object.keys(regular).map(key => {
                        const value = regular[key];
                        return (
                            <div key={key} className={classes.icon}>
                                <Icon icon={value} size={IconSizes.x2} />
                                <span>{key}</span>
                            </div>
                        )
                    })}
                </div>
            </Accordian>
        </View>
    );
}

export default ButtonView;
