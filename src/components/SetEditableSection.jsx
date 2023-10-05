import {EditFormButton} from "./EditFormButton.jsx";

const buttonDefaultStyle = {
    display: "block",
    padding: "0.5em 4em",
    width: "100%",
    marginBottom: "1em",
    border: "none",
    borderRadius:"5px",
    color:"#FFF"
}

export function SetEditableSection() {

    return (
        <section className="set-edit-section">
            <EditFormButton backgroundColor="red" text="Save" buttonStyle={buttonDefaultStyle}></EditFormButton>
            <EditFormButton backgroundColor="blue" text="Edit" buttonStyle={buttonDefaultStyle}></EditFormButton>
        </section>
    )
}