import {FETCHING_SMURF, FETCHED_SMURF, FETCH_FAILED, BIRTHING_SMURF, BIRTHED_SMURF, FAILED_SMURFING } from '../actions/index'


const initialState = {
    isFetching: false,
    smurfData: [],
    error:'',
    id: Date.now()
}

export const reducer = (state=initialState, action)=>{

    switch(action.type) {
        case(FETCHING_SMURF):
            return({...state,
                isFetching: true,
                error: ''
            })

        case(FETCHED_SMURF):
            return({...state,
                isFetching: false,
                smurfData: action.payload
            })

        case(FETCH_FAILED):
            return({...state,
                isFetching: false,
                error: action.payload
            })

        case(BIRTHING_SMURF):
            return({...state,
                isFetching: true,
                error:''
            })

        case(BIRTHED_SMURF):
            return({...state, 
                isFetching: false,
                smurfData: [...state.smurfData,
                    {
                        name: action.payload.name,
                        position: action.payload.position,
                        nickname: action.payload.nickname,
                        desc: action.payload.desc
                    }
                ],
            })

        case(FAILED_SMURFING):
            return ({...state,
                isFetching: false,
                error: action.payload
            })

        default:
            return (state)
        
    }

}



//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary