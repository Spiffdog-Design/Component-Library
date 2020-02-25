import React from 'react';

import { Button, View } from '@spiffdog/spiffy';

import Previewer from '../../../components/previewer';

const ButtonView = () => {
    const scope = { Button, React };

    const code = `
    function ButtonExample() {
        const [clicks, setClicks] = React.useState(0);
        const handleIncClick = evt => setClicks(c => c + 1);
        const handleDecClick = evt => setClicks(c => c - 1);

        return (
            <React.Fragment>
                <Button onClick={ handleIncClick }>Increment</Button>
                <Button onClick={ handleDecClick }>Decrement</Button>
                <p>{clicks}</p>
            </React.Fragment>
        )
    }
    `;

    return (
        <View>
            <Previewer code={code} scope={scope} />
        </View>
    );
}

export default ButtonView;
