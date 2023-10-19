import {EditFormButton} from "./EditFormButton.jsx";

export function SwitchSection(
    {
        editHandler,
        previewHandler
    }) {

    return (
        <section className="switch-section">
            <EditFormButton text="Edit" clickHandler={editHandler}></EditFormButton>
            <EditFormButton text="Preview" clickHandler={previewHandler}></EditFormButton>
        </section>
    )
}