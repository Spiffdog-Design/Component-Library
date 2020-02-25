import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import { Drawer, Footer, Header, Main, Navigation, NavigationSeperator } from './layout';
import About from './views/common/about';
import Home from './views/common/home';
import ViewTheme from './views/common/theme';

import Button from './views/components/form/buttons';

import Accordian from './views/components/layout/accordian';
import Icon from './views/components/layout/icons';
import Grid from './views/components/layout/grid';
import Tabs from './views/components/layout/tabs';

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

const App = ({ themes, theme, onThemeSelect }) => {
    const classes = useStyles();

    const handleChange = (evt) => {
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
                            <Route path="/accordian">
                                <Accordian />
                            </Route>
                            <Route path="/button">
                                <Button />
                            </Route>
                            <Route path="/grid">
                                <Grid />
                            </Route>
                            <Route path="/icon">
                                <Icon />
                            </Route>
                            <Route path="/tabs">
                                <Tabs />
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
                        <Link to="/accordian">Accordian</Link>
                        <Link to="/grid">Grid</Link>
                        <Link to="/tabs">Tabs</Link>
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
