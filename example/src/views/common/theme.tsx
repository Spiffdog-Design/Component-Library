import React from 'react';
import { createUseStyles } from 'react-jss';
import Tree from 'react-json-tree';
import { Theme, Colors, View } from '@spiffdog/spiffy';

const useStyles = createUseStyles((theme: Theme) => ({
    inspector: {
        background: '#002b36',
        margin: 12,
        padding: '6px 12px',
        width: '50%',
    }
}));

const useStylesChip = createUseStyles({
    chip: {
        background: '#ffffff',
        borderRadius: 16,

        fontFamily: '\'Roboto Mono\', monospace',
        fontSize: 10,
        margin: '0px 4px',
        padding: 6,
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        margin: 12,
    }
});

function hasKey<T>(obj: T, key: keyof any): key is keyof T {
    return key in obj
}

const getColorChips = (main: any, name: string, accent: string | undefined) => {
    return Object.keys(main).map((key, idx) => ({
        background: hasKey(main, key) ? main[key] : null,
        color: accent,
        name: `${name} ${++idx}`,
    }))
}

const ViewTheme: React.FC<ViewThemeProps> = (props) => {
    const { theme } = props;
    const classes = useStyles();

    return (
        <View>
            Colors:
            <div>
                <ChipList colors={[
                    { background: Colors.black, name: 'Black', color: Colors.white },
                    { background: Colors.white, name: 'White', color: Colors.black },
                ]} />
                <ChipList colors={[
                    ...getColorChips(Colors.light.gray, "Light Gray", Colors.black),
                    ...getColorChips(Colors.dark.gray, "Dark Gray", Colors.white)
                ]} />
                <ChipList colors={[
                    ...getColorChips(Colors.light.blue, "Light Blue", Colors.black),
                    ...getColorChips(Colors.dark.blue, "Dark Blue", Colors.white),
                ]} />
                <ChipList colors={[
                    ...getColorChips(Colors.light.green, "Light Green", Colors.black),
                    ...getColorChips(Colors.dark.green, "Dark Green", Colors.white),
                ]} />
                <ChipList colors={[
                    ...getColorChips(Colors.light.red, "Light Red", Colors.black),
                    ...getColorChips(Colors.dark.red, "Dark Red", Colors.white),
                ]} />
                <ChipList colors={[
                    ...getColorChips(Colors.light.yellow, "Light Yellow", Colors.black),
                    ...getColorChips(Colors.dark.yellow, "Dark Yellow", Colors.white),
                ]} />
            </div>
            Theme inspector:
            <div className={classes.inspector}>
                <Tree data={theme} invertTheme={false} />
            </div>
        </View>
    );
}

const ChipList: React.FC<ChipProps> = ({ colors }) => {
    const classes = useStylesChip();

    return (
        <div className={classes.list}>
            {colors.map((c, i) => c == null ? c : <div key={i} className={classes.chip} style={{
                backgroundColor: c.background,
                color: c.color
            }}>{c.name}</div>)}
        </div>
    );
}

export default ViewTheme;

type ChipProps = {
    colors: ChipColorProps[]
}

type ChipColorProps = {
    background?: string,
    color?: string,
    name?: string,
}

type ViewThemeProps = {
    theme: Theme
}
