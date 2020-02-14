import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import { Drawer, Footer, Header, Main, Navigation, NavigationSeperator } from 'src/layout';
import About from 'src/views/common/about';
import Home from 'src/views/common/home';

import Button from 'src/views/components/button';
import Grid from 'src/views/components/grid';

interface AppProps {
    themes: string[],
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

const App: React.FC<AppProps> = ({ themes, onThemeSelect }) => {
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
                            <Route path="/grid">
                                <Grid />
                            </Route>
                            <Route path="/button">
                                <Button />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Main>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <NavigationSeperator label="components" />
                        <Link to="/grid">Grid</Link>
                        <Link to="/button">Button</Link>
                    </Navigation>
                    <Drawer />
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
