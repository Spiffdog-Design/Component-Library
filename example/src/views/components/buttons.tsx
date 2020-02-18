import React from 'react';

import { Button, View } from '@spiffdog/spiffy';

import Previewer from 'src/components/previewer';

interface ButtonViewProps { }

const ButtonView: React.FC<ButtonViewProps> = () => {
    const scope = { Button };

    const code = `
    <Button label="Hi Sam" />
    `;

    return (
        <View>
            <Previewer code={code} scope={scope}>
                <Button label="Hi Sam" />
            </Previewer>
        </View>
    );
}

export default ButtonView;
