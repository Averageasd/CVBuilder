export function EditFormButton({text, backgroundColor, buttonStyle}) {
    return (
        <button type="button" style={{...buttonStyle, backgroundColor:backgroundColor}}>{text}</button>
    )
}