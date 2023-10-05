import {EditFormButton} from "./EditFormButton.jsx";

const buttonStyle = {
    display: "block",
    padding: "0.5em 4em",
    width: "100%",
    marginBottom: "1em",
    border:"none",
    backgroundColor:"red"
}
EditFormButton.defaultProps = buttonStyle;
export function SetEditableSection(){

    return (
        <section className="set-edit-section">
            <EditFormButton buttonStyle={{backgroundColor:"red"}}>Edit</EditFormButton>
            <EditFormButton buttonStyle={{backgroundColor:"blue"}}>Save</EditFormButton>
        </section>
    )
}