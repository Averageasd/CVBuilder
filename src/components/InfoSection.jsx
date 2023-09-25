import '../App.css';


export function InfoSection({infoTitle, children}) {
    return (
        <section className="form-section">
            <h2 className="section-title">{infoTitle}</h2>
            <form className="info-form">
                <hr className="section-divider"></hr>
                {children}
            </form>
        </section>
    )
}