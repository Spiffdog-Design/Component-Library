import React from 'react';
import { Button, Grid, GridDirection, GridAlign, GridJustify, View } from '@spiffdog/spiffy';
import Previewer from '../../../components/previewer';

const GridView = () => {
    const [align, setAlign] = React.useState(GridAlign.CENTER);
    const [direction, setDirection] = React.useState(GridDirection.COLUMN);
    const [justify, setJustify] = React.useState(GridJustify.CENTER);

    const scope = { Grid, GridDirection, GridAlign, GridJustify };

    const code = `
    <Grid
        align={'${align}'}
        direction={'${direction}'}
        justify={'${justify}'}
    >
        <div>Plop</div>
        <div>Plop</div>
        <div>Plop</div>
    </Grid>
    `;

    return (
        <View>
            <Button onClick={e => setAlign(GridAlign.FLEX_END)}>Set Align</Button>
            <Button onClick={e => setJustify(GridJustify.FLEX_END)}>Set Justify</Button>
            <Button onClick={e => setDirection(GridDirection.ROW)}>Set Row</Button>
            <Previewer code={code} scope={scope} />
        </View>
    );
}

export default GridView;
