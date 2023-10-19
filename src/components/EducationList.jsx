import {EducationItem} from "./EducationItem.jsx";

export function EducationList(
    {
        educationList,
        updateEducationSchool,
        updateEducationGpa,
        updateEducationDateFrom,
        updateEducationDateTo,
        deleteEducation,
    }
) {
    return (
        <ul>
            {educationList.map(education => {
                return (
                    <EducationItem
                        education={education}
                        updateEducationSchool={updateEducationSchool}
                        updateEducationGpa={updateEducationGpa}
                        updateEducationDateFrom={updateEducationDateFrom}
                        updateEducationDateTo={updateEducationDateTo}
                        deleteEducation={deleteEducation}>
                    </EducationItem>
                )
            })}
        </ul>
    )
}