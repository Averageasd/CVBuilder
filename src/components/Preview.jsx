import {PreviewHeader} from "./PreviewHeader.jsx";
import {PreviewBody} from "./PreviewBody.jsx";

export function Preview(
    {
        headerInfo,
        experienceList,
        educationList
    }
) {
    return (
        <section className="preview">
            <PreviewHeader headerInfo={headerInfo}>
            </PreviewHeader>
            <PreviewBody
                experienceList={experienceList}
                educationList={educationList}>
            </PreviewBody>
        </section>
    )

}