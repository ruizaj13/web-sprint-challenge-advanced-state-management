import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../actions/index'

export const Smurfs = ({getSmurf, error, isFetching, smurfData }) => {
   
    useEffect(() => {
        getSmurf()
    },[])

    if (error) {
        return <h2>Loading Error</h2>
    }

    if (isFetching) {
        return <h2>Fetching Smurf!</h2>
    }




    return(<div data-testid="smurf" className="card">
        <h2>Villagers</h2>
        {smurfData.map((smurf => {
            return(
            <div>
                <p>{smurf.name} Aka {smurf.nickname} </p>
                <p>{smurf.position}</p>
                <p>{smurf.description}</p>
            </div>)
        }))}



    </div>);
    
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        smurfData: state.smurfData,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurf})(Smurfs);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.