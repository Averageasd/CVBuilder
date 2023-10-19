import {ExperienceItem} from "./ExperienceItem.jsx";

export function ExperienceList(
    {
        experienceList,
        updateExperienceCompanyName,
        updateExperiencePositionName,
        updateExperienceDateFrom,
        updateExperienceDateTo,
        deleteExperience,
    }) {
    return (
        <ul>
            {
                experienceList.map(experience => {
                    return (
                        <ExperienceItem
                            experience={experience}
                            updateExperienceCompanyName={updateExperienceCompanyName}
                            updateExperiencePositionName={updateExperiencePositionName}
                            updateExperienceDateFrom={updateExperienceDateFrom}
                            updateExperienceDateTo={updateExperienceDateTo}
                            deleteExperience={deleteExperience}
                        >
                        </ExperienceItem>
                    )
                })
            }
        </ul>
    )
}