import React from 'react';
import { Grid, GridDirection, GridAlign, GridJustify, View } from '@spiffdog/spiffy';
import Previewer from 'src/components/previewer';

interface GridViewProps { }

const GridView: React.FC<GridViewProps> = () => {
    const scope = { Grid, GridDirection, GridAlign, GridJustify };

    const code = `
        <Grid
            align={GridAlign.CENTER}
            direction={GridDirection.COLUMN}
            justify={GridJustify.FLEX_END}
        >
            <div>Plop</div>
            <div>Plop</div>
            <div>Plop</div>
        </Grid>
    `;

    return (
        <View>
            <Previewer code={code} scope={scope}>
                <Grid
                    align={GridAlign.CENTER}
                    direction={GridDirection.COLUMN}
                    justify={GridJustify.FLEX_END}
                >
                    <div>Plop</div>
                    <div>Plop</div>
                    <div>Plop</div>
                </Grid>
            </Previewer>
        </View>
    );
}

export default GridView;
