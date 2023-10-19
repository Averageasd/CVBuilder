const buttonDefaultStyle = {
    padding: "0.5em 2em",
    minWidth: "150px",
    textAlign: "center",
    marginBottom: "1em",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem"
}

export function EditFormButton({text, clickHandler}) {
    return (
        <button
            type="button"
            onClick={clickHandler}
            style={{...buttonDefaultStyle}}>{text}
        </button>
    )
}