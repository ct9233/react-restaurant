import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Story from './StoryComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: ''
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames='page' timeout={400}>
                        <Switch>
                            <Route path={`${process.env.PUBLIC_URL}/home`} component={HomePage} />
                            <Route exact path={`${process.env.PUBLIC_URL}/menu`} render={() => <Menu />} />
                            <Route exact path={`${process.env.PUBLIC_URL}/story`} render={() => <Story />} />
                            <Route exact path={`${process.env.PUBLIC_URL}/contact`} render={() => <Contact />} />
                            <Redirect to={`${process.env.PUBLIC_URL}/home`} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    };
}

export default withRouter(Main);