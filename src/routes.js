import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store, { history } from "./store";
import "./index.css"
// import { ConnectedRouter } from "react-router-redux";

import LandingPageContainer from "./containers/LandingPageContainer/LandingPageContainer";
import CandidatesContainer from "./containers/CandidatesContainer/CandidatesContainer";
import SingleCandidateContainer from "./containers/SingleCandidateContainer/SingleCandidateContainer";

const App = () => (
  <BrowserRouter>
	  <Provider store={store}>
	  	<Switch>
	  		<Route exact path="/" component={LandingPageContainer} />
	  		<Route path="/candidates" component={CandidatesContainer} />
	  		<Route path="/candidate/:id" component={SingleCandidateContainer} />
	  	</Switch>
	  </Provider>
  </BrowserRouter>    
);

// const mapStateToProps = state => ({
  // isAuthed: state.authReducer.isAuthed,
  // user: state.authReducer.user
// });

export default App;
