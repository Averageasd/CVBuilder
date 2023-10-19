import {InputContainer} from "./InputContainer.jsx";
import dateFormat from "dateformat";
import {DeleteButton} from "./DeleteButton.jsx";

export function EducationItem(
    {
        education,
        updateEducationSchool,
        updateEducationGpa,
        updateEducationDateFrom,
        updateEducationDateTo,
        deleteEducation,
    }
) {
    return (
        <li key={education._id}>
            <InputContainer inputExample="e.g: ABC High school">
                <input
                    type="text"
                    placeholder="school"
                    onChange={(e) => {
                        updateEducationSchool(education._id, e.target.value)
                    }}
                    value={education._school}
                >
                </input>
            </InputContainer>
            <InputContainer inputExample="e.g: 3.0">
                <input
                    type="number"
                    placeholder="gpa"
                    min="0"
                    step="any"
                    max="4"
                    value={education._gpa}
                    onChange={(e) => {
                        updateEducationGpa(education._id, e.target.value)
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
                        onChange={(e) =>
                            updateEducationDateFrom(education._id, new Date(`${e.target.value} EDT`))}
                        value={dateFormat(education._dateFrom, 'yyyy-mm-dd')}
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
                        onChange={(e) =>
                            updateEducationDateTo(education._id, new Date(`${e.target.value} EDT`))}
                        value={dateFormat(education._dateTo, 'yyyy-mm-dd')}
                    >
                    </input>
                </label>
            </InputContainer>
            <DeleteButton clickHandler={() => {
                deleteEducation(education._id)
            }}></DeleteButton>
            <hr></hr>
        </li>
    )
}