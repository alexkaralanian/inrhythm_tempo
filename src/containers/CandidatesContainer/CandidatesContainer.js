import React from 'react';
import { connect } from 'react-redux';
import Candidates from "../../components/Candidates/Candidates"
import Navigation from "../../components/Navigation/Navigation"
import { fetchCandidates } from "../../actions/candidate-actions"

class CandidatesContainer extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		this.props.fetchCandidates()
	}

	render(){
		return (
			<div>
				<Navigation />
				<Candidates 
					candidates={this.props.candidates}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	candidates: state.candidatesReducer.candidates
});

const mapDispatchToProps = {
	fetchCandidates
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesContainer);