export function InputContainer({children, lastInputInSection, inputExample}) {
    return (
        <article className="input-container"
                 style={lastInputInSection ? {marginBottom: 0} : {}}>
            {children}
            <p className="input-example">{inputExample}</p>
        </article>
    )
}