import {AddButton} from "./AddButton.jsx";
import {InfoSection} from "./InfoSection.jsx";
import {EducationList} from "./EducationList.jsx";

export function EducationSection(
    {
        educationList,
        updateEducationSchool,
        updateEducationGpa,
        updateEducationDateFrom,
        updateEducationDateTo,
        deleteEducation,
        addEducation
    }
) {
    return (
        <InfoSection infoTitle="Education">
            <EducationList
                educationList={educationList}
                updateEducationSchool={updateEducationSchool}
                updateEducationGpa={updateEducationGpa}
                updateEducationDateFrom={updateEducationDateFrom}
                updateEducationDateTo={updateEducationDateTo}
                deleteEducation={deleteEducation}>
            </EducationList>
            <AddButton clickHandler={addEducation}></AddButton>
        </InfoSection>
    )
}