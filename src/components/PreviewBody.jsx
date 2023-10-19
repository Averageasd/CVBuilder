import {PreviewExperience} from "./PreviewExperience.jsx";
import {PreviewEducation} from "./PreviewEducation.jsx";

export function PreviewBody(
    {
        experienceList,
        educationList
    }) {

    return (
        <>
            <PreviewExperience
                experienceList={experienceList}>
            </PreviewExperience>

            <PreviewEducation
                educationList={educationList}>
            </PreviewEducation>
        </>
    )
}