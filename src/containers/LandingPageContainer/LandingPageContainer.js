import React from "react";
import { connect } from "react-redux";
import Navigation from "../../components/Navigation/Navigation"
// import { Redirect } from "react-router";

import LandingPage from "../../components/LandingPage/LandingPage";

class LandingPageContainer extends React.Component {
  render() {
    return (
    	<div>
    		<Navigation />
        <LandingPage />
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  // isAuthed: state.authReducer.isAuthed
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);