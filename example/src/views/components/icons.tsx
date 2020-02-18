import React from 'react';
import { createUseStyles } from 'react-jss';

import { Icon, IconTypes, View } from '@spiffdog/spiffy';

import Previewer from 'src/components/previewer';

const useStyles = createUseStyles({
    icon: {
        backgroundColor: '#ffffff',
        display: 'flex',
        borderRadius: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        padding: 8,
        height: 50,
        width: 150,
        '& span': {
            fontSize: 10,
            margin: '4px 8px 0 8px'
        }
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

interface ButtonViewProps { }

const ButtonView: React.FC<ButtonViewProps> = () => {
    const classes = useStyles();
    const scope = { Icon, IconTypes };

    const code = `
        <Icon name={IconTypes.AWARD} />
    `;

    return (
        <View>
            <Previewer code={code} scope={scope}>
                <Icon name={IconTypes.AWARD} />
            </Previewer>
            Icons:
            <div className={classes.list}>
                {Object.keys(IconTypes).map((key: string) => {
                    const value = IconTypes[key as keyof typeof IconTypes];
                    return (
                        <div key={value} className={classes.icon}>
                            <Icon name={value} />
                            <span>{key}</span>
                        </div>
                    )
                })}
            </div>
        </View>
    );
}

export default ButtonView;
