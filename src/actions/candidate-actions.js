import * as types from "../types";
import axios from "axios"

export const setCandidates = candidates => ({
  type: types.SET_CANDIDATES,
  payload: candidates
});

export const setCandidate = candidate => ({
  type: types.SET_CANDIDATE,
  payload: candidate
});

export const isFetching = bool => ({
  type: types.IS_FETCHING,
  payload: bool
});

export const fetchCandidates = () => async dispatch => {
  dispatch(isFetching(true));
  try {
    const res = await axios.get('/candidates');
    dispatch(setCandidates(res.data));
    dispatch(isFetching(false));
  } catch (err) {
    console.error("fetchContacts ERROR", err.response);
    dispatch(isFetching(false));
    // dispatch(setError("ERROR FETCHING CONTACTS"));
  }
};

export const createCandidate = data => async dispatch => {
  dispatch(isFetching(true));
  try {
    const res = await axios.post('candidates/create', data)
    dispatch(setCandidate(res.data))
    dispatch(isFetching(false));
  }
  catch(err){
    console.error("Submitting new contact unsuccessful", err);
    dispatch(isFetching(false));
  }
};