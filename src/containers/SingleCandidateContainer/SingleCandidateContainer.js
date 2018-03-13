import React from 'react'
import { connect } from 'react-redux'
import Navigation from "../../components/Navigation/Navigation"
import SingleCandidate from "../../components/SingleCandidate/SingleCandidate"

class SingleCandidateContainer extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
				<Navigation />
				<SingleCandidate 
					candidate={this.props.candidate}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	candidate: state.candidatesReducer.candidate
})
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(SingleCandidateContainer)
