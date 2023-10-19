import {InputContainer} from "./InputContainer.jsx";
import dateFormat from "dateformat";
import {DeleteButton} from "./DeleteButton.jsx";

export function ExperienceItem(
    {
        experience,
        updateExperienceCompanyName,
        updateExperiencePositionName,
        updateExperienceDateFrom,
        updateExperienceDateTo,
        deleteExperience
    }
) {
    return (
        <li key={experience._id}>
            <InputContainer inputExample="e.g: Hero Company">
                <input
                    type="text"
                    placeholder="company"
                    value={experience._company}
                    onChange={(e) => {
                        updateExperienceCompanyName(experience._id, e.target.value)
                    }}
                >
                </input>
            </InputContainer>

            <InputContainer inputExample="e.g: Software engineer">
                <input
                    type="text"
                    placeholder="position"
                    value={experience._position}
                    onChange={(e) => {
                        updateExperiencePositionName(experience._id, e.target.value)
                    }}
                >
                </input>
            </InputContainer>
            <InputContainer inputExample="e.g: 01/01/2023">
                <label>
                    From Date:
                    <input
                        type="date"
                        placeholder="date from"
                        onChange={(e) => {
                            updateExperienceDateFrom(experience._id, new Date(`${e.target.value} EDT`))
                        }}
                        value={dateFormat(experience._dateFrom, 'yyyy-mm-dd')}
                    >
                    </input>
                </label>

            </InputContainer>
            <InputContainer inputExample="e.g: 02/01/2023">
                <label>
                    To Date:
                    <input
                        type="date"
                        placeholder="date to"
                        onChange={(e) => {
                            updateExperienceDateTo(experience._id, new Date(`${e.target.value} EDT`))
                        }}
                        value={dateFormat(experience._dateTo, 'yyyy-mm-dd')}
                    >
                    </input>
                </label>
            </InputContainer>
            <DeleteButton clickHandler={() => {
                deleteExperience(experience._id)
            }}></DeleteButton>
            <hr className="section-divider"></hr>
        </li>
    )
}