import dateFormat from "dateformat";

export function PreviewBody(
    {
        experienceList,
        educationList
    }) {

    return (
        <>
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
            <section className="edu-info-container">
                <h2 className="section-title">Education</h2>
                <hr className="section-divider"></hr>
                <ul className="education-display">
                    {educationList.map(edu => {
                        return (
                            <li key={edu._id}>
                                <p className="school-title">{edu._school === '' ? 'School' : edu._school}</p>
                                <p className="gpa">{edu._gpa === '' ? 'GPA: N/A' : 'GPA: ' + edu._gpa}</p>
                                <p className="school-year">{dateFormat(edu._dateFrom, 'mm/dd/yyyy')} - {dateFormat(edu._dateTo, 'mm/dd/yyyy')}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}