import dateFormat from "dateformat";

export function PreviewEducation(
    {
        educationList
    }
){
    return (
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
    )
}