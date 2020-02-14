import React from 'react';

import { Grid, GridDirection, Icon } from 'component-library';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
    return (
        <React.Fragment>
            <Grid direction={GridDirection.COLUMN}>
                <div>Plop</div>
                <div>Plop</div>
                <div>Plop</div>
                <Icon icon={['far', 'square']} />
            </Grid>
        </React.Fragment>
    );
}

export default Home;
