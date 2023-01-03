import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


const maxLenght50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                       validate={[required, maxLenght50 ]} 
                       placeholder="Enter your message" name="newMessageBody"/>
            </div>
            <div><button>Send101</button></div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);