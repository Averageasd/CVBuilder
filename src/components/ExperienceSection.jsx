import {AddButton} from "./AddButton.jsx";
import {InfoSection} from "./InfoSection.jsx";
import {ExperienceList} from "./ExperienceList.jsx";

export function ExperienceSection(
    {
        experienceList,
        updateExperienceCompanyName,
        updateExperiencePositionName,
        updateExperienceDateFrom,
        updateExperienceDateTo,
        deleteExperience,
        addExperience,


    }) {
    return (
        <InfoSection infoTitle="Experience">
            <ExperienceList
                experienceList = {experienceList}
                updateExperienceCompanyName = {updateExperienceCompanyName}
                updateExperiencePositionName = {updateExperiencePositionName}
                updateExperienceDateFrom = {updateExperienceDateFrom}
                updateExperienceDateTo = {updateExperienceDateTo}
                deleteExperience = {deleteExperience}>
            </ExperienceList>
            <AddButton clickHandler={addExperience}></AddButton>
        </InfoSection>
    )
}