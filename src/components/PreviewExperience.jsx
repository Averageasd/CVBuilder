import dateFormat from "dateformat";

export function PreviewExperience(
    {experienceList}
) {
    return (
        <section className="experience-info-container">
            <h2 className="section-title">Experience</h2>
            <hr className="section-divider"></hr>
            <ul className="experience-display">
                {experienceList.map(exp => {
                    return (
                        <li key={exp._id}>
                            <p className="job-title">{exp._position === '' ? 'Position' : exp._position}</p>
                            <p className="company-title">{exp._company === '' ? 'Company' : exp._company}</p>
                            <p className="job-year">{dateFormat(exp._dateFrom, 'mm/dd/yyyy')} - {dateFormat(exp._dateTo, 'mm/dd/yyyy')}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )

}