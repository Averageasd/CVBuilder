export function PreviewHeader({headerInfo}){
    return (
        <>
            <h2 className="resume-name">{headerInfo.name}</h2>
            <section className="general-info-container">
                <p>
                    {headerInfo.personalInfo.phoneNumDisplay} | {headerInfo.personalInfo.emailDisplay} | {headerInfo.personalInfo.addressDisplay}
                </p>
            </section>
        </>
    )
}