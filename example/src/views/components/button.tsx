import React from 'react';

import { Button } from 'component-library';

import Previewer from 'src/components/previewer';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
    const scope = { Button };

    const code = `
    <Button />
    `;

    return (
        <Previewer code={code} scope={scope}>
            <Button />
        </Previewer>
    );
}

export default Home;
