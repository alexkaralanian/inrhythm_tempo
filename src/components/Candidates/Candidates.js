import React from "react";
import { Link } from "react-router-dom"
import "./Candidates.css"

const Candidates = ({candidates}) => {
	return (	
	  <div>
	    <div>
	      <h1>Candidates</h1>
	      <ul>
	      	{candidates && candidates.map(candidate=> (
	      		 <li key={candidate.email}>
	      			<h3>Details:</h3>
	      			<div>FirstName: <Link to={`/candidate/${candidate.email}`}>{candidate.firstName}</Link></div>
	      			<div>LastName: {candidate.lastName}</div>
	      			<div>Email: {candidate.email}</div>
	      			<h3>ScoreCard:</h3>
	      			<div>Skill: {candidate.scoreCards[0].skill.name}</div>
	      			<div>Skill Description: {candidate.scoreCards[0].skill.description}</div>
	      			<div>Score: {candidate.scoreCards[0].score}</div>
	      			<div>Notes: {candidate.scoreCards[0].note}</div>
	      		</li>)
	      	)}
	      </ul>
	    </div>
	  </div>
  )
};

export default Candidates;