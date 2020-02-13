import React from 'react';
import { Grid, GridDirection } from 'component-library';

interface AppProps {
    themes: string[],
    onThemeSelect: (value: string) => void
}

const App: React.FC<AppProps> = ({ themes, onThemeSelect }) => {
    const handleChange = (evt: React.FormEvent<HTMLSelectElement>) => {
        const option = evt.currentTarget.selectedOptions[0];
        if (option != null) {
            onThemeSelect(option.value);
        }
    }

    return (
        <div>
            <select onChange={handleChange}>
                {themes.map((t, i) => <option key={i} value={t}>{t}</option>)}
            </select>
            <Grid direction={GridDirection.COLUMN}>
                <div>Plop</div>
                <div>Plop</div>
                <div>Plop</div>
            </Grid>s
    </div>
    );
}

export default App;
