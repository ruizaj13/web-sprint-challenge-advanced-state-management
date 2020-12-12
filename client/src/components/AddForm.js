import React, {useRef} from 'react';
import { connect } from 'react-redux';
import {addSmurf} from '../actions/index'




const AddForm = (props) => {
    const nameRef = useRef()
    const nickNameRef = useRef()
    const positionRef = useRef()
    const descRef = useRef()


    const submitHandler = (e) => {
        e.preventDefault();
        props.addSmurf({
            name: nameRef.current.value,
            nickName: nickNameRef.current.value,
            position: positionRef.current.value,
            desc: descRef.current.value
        });
    }
    
    return(<section>
        <h1>Add Smurf</h1>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input  ref={nameRef}  type='text' name="name" id="name" />

                <label htmlFor="nickName">Nick Name:</label><br/>
                <input   ref={nickNameRef} type='text' name="nickName" id="nickName" />

                <label htmlFor="position">Position:</label><br/>
                <input  ref={positionRef} type='text' name="position" id="position" />

                <label htmlFor="desc">Description:</label><br/>
                <input  ref={descRef} type='text' name="desc" id="desc" />
            </div>
            {/* <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div> */}
            <button type='submit'>Submit Smurf</button>
        </form>
    </section>);
    

}





export default connect(null, {addSmurf})(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.