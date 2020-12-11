import axios from 'axios';
export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHED_SMURF = 'FETCHED_SMURF';
export const FETCH_FAILED = 'FETCH_FAILED';
export const BIRTHING_SMURF = 'BIRTHING_SMURF';
export const BIRTHED_SMURF = 'BIRTHED_SMURF';
export const FAILED_SMURFING = 'FAILED_SMURFING';

export const getSmurf = () => {

    return (dispatch => {

        dispatch({type:FETCHING_SMURF})

        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({type:FETCHED_SMURF, payload:res.data})
            })
            .catch(err => {
                dispatch({type:FETCH_FAILED, payload:err.message})
            })
    })
}

export const addSmurf = () => {
    return (dispatch => {
        
        dispatch({type:BIRTHING_SMURF})

        axios  
            .post('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({type:BIRTHED_SMURF, payload:res.data})
            })
            .catch(err => {
                dispatch({type:FAILED_SMURFING, payload:err.message})
            })
    })
}



//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.