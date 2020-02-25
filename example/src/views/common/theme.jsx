import React from 'react';
import { createUseStyles } from 'react-jss';
import Tree from 'react-json-tree';
import { Accordian, Colors, View } from '@spiffdog/spiffy';

const useStyles = createUseStyles(theme => ({
    inspector: {
        background: '#002b36',
        margin: 12,
        padding: '6px 12px',
    }
}));

const useStylesChip = createUseStyles({
    block: {
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

const getColorChips = (main, name, accent) => {
    return Object.keys(main).map((key, idx) => ({
        background: main[key],
        color: accent,
        name: `${name} ${++idx}`,
    }))
}

const ViewTheme = (props) => {
    const { theme } = props;
    const classes = useStyles();

    return (
        <View>
            <Accordian title="Gray">
                <ChipList colors={[
                    { background: Colors.white, name: 'White', color: Colors.black },
                    ...getColorChips(Colors.light.gray, "Light Gray", Colors.black),
                    ...getColorChips(Colors.dark.gray, "Dark Gray", Colors.white),
                    { background: Colors.black, name: 'Black', color: Colors.white },
                ]} />
            </Accordian>
            <Accordian title="Blue">
                <ChipList colors={[
                    ...getColorChips(Colors.light.blue, "Light Blue", Colors.black),
                    ...getColorChips(Colors.dark.blue, "Dark Blue", Colors.white),
                ]} />
            </Accordian>
            <Accordian title="Green">
                <ChipList colors={[
                    ...getColorChips(Colors.light.green, "Light Green", Colors.black),
                    ...getColorChips(Colors.dark.green, "Dark Green", Colors.white),
                ]} />
            </Accordian>
            <Accordian title="Red">
                <ChipList colors={[
                    ...getColorChips(Colors.light.red, "Light Red", Colors.black),
                    ...getColorChips(Colors.dark.red, "Dark Red", Colors.white),
                ]} />
            </Accordian>
            <Accordian title="Yellow">
                <ChipList colors={[
                    ...getColorChips(Colors.light.yellow, "Light Yellow", Colors.black),
                    ...getColorChips(Colors.dark.yellow, "Dark Yellow", Colors.white),
                ]} />
            </Accordian>
            <Accordian title="Theme Inspector">
                <div className={classes.inspector}>
                    <Tree data={theme} invertTheme={false} />
                </div>
            </Accordian>
            <Accordian title="Color Configurations">
                <div className={classes.inspector}>
                    <Tree data={Colors} invertTheme={false} />
                </div>
            </Accordian>
        </View>
    );
}

const ChipList = ({ colors }) => {
    const classes = useStylesChip();

    return (
        <div className={classes.list}>
            {colors.map((c, i) => c == null ? c : <div key={i} className={classes.block} style={{
                backgroundColor: c.background,
                color: c.color
            }}>{c.name}</div>)}
        </div>
    );
}

export default ViewTheme;
