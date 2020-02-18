import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { Theme } from '@spiffdog/spiffy';

import { Drawer, Footer, Header, Main, Navigation, NavigationSeperator } from 'src/layout';
import About from 'src/views/common/about';
import Home from 'src/views/common/home';
import ViewTheme from 'src/views/common/theme';

import Button from 'src/views/components/buttons';
import Icon from 'src/views/components/icons';
import Grid from 'src/views/components/grid';

interface AppProps {
    themes: string[],
    theme: Theme,
    onThemeSelect: (value: string) => void
}

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    '@media (min-width: 768px)': {
        body: {
            flexDirection: 'row',
            flex: 1,
        },
    },
});

const App: React.FC<AppProps> = ({ themes, theme, onThemeSelect }) => {
    const classes = useStyles();

    const handleChange = (evt: React.FormEvent<HTMLSelectElement>) => {
        const option = evt.currentTarget.selectedOptions[0];
        if (option != null) {
            onThemeSelect(option.value);
        }
    }

    return (
        <div className={classes.container}>
            <Router>
                <Header>
                    <select onChange={handleChange}>
                        {themes.map((name, index) => <option key={index} value={name}>{name}</option>)}
                    </select>
                </Header>
                <div className={classes.body}>
                    <Main>
                        <Switch>
                            <Route path="/button">
                                <Button />
                            </Route>
                            <Route path="/grid">
                                <Grid />
                            </Route>
                            <Route path="/icon">
                                <Icon />
                            </Route>

                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/theme">
                                <ViewTheme theme={theme} />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Main>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <NavigationSeperator label="Form" />
                        <Link to="/button">Button</Link>
                        <NavigationSeperator label="Layout" />
                        <Link to="/grid">Grid</Link>
                        <NavigationSeperator label="Misc" />
                        <Link to="/icon">Icons</Link>
                        <Link to="/theme">Theme Configuration</Link>
                    </Navigation>
                    <Drawer />
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
