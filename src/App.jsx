import './App.css'
import {InfoSection} from "./components/InfoSection.jsx";
import {useState} from "react";
import {InputContainer} from "./components/InputContainer.jsx";
import {AddButton} from "./components/AddButton.jsx";
import Experience from "./data/Experience.js";
import Education from "./data/Education.js";
import {v4 as uuidv4} from 'uuid';
import dateFormat from "dateformat";
import {DeleteButton} from "./components/DeleteButton.jsx";
import {SwitchSection} from "./components/SwitchSection.jsx";
import {EditFormButton} from "./components/EditFormButton.jsx";

function App() {
    const [nameInput, setNameInput] = useState("");
    const [addressInput, setAddressInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneNumInput, setPhoneNumInput] = useState("");

    const [inputEditable, setInputEditable] = useState(true);

    const [experienceList, setExperienceList] = useState([]);
    const [educationList, setEducationList] = useState([]);

    function setFromEditable() {
        setInputEditable(true);
    }

    function showPreview() {
        setInputEditable(false);
    }

    function addExperience() {
        const experience = Experience(uuidv4(), '', '', new Date(), new Date());
        const newList = [...experienceList];
        newList.push(experience);
        setExperienceList(newList);
    }

    function deleteExperience(id) {
        let copiedExpList = [...experienceList];
        copiedExpList = copiedExpList.filter((exp) => exp._id !== id);
        setExperienceList(copiedExpList);
    }

    function deleteEducation(id) {
        let copiedEducationList = [...educationList];
        copiedEducationList = copiedEducationList.filter((edu) => edu._id !== id);
        setEducationList(copiedEducationList);
    }

    function addEducation() {
        const education = Education(uuidv4(), '', '', new Date(), new Date());
        const newEducationList = [...educationList];
        newEducationList.push(education);
        setEducationList(newEducationList);
    }

    function getExperienceWithId(id) {
        return experienceList.find((exp) => exp._id === id);
    }

    function createExpCopy(id) {
        const expWithId = getExperienceWithId(id);
        return {...expWithId};
    }

    function setExpListWithUpdatedItem(updatedItem, id) {
        setExperienceList(experienceList.map(exp => {
            if (exp._id !== id) {
                return exp;
            }
            return updatedItem;
        }));
    }

    function updateExperienceDateFrom(id, dateFrom) {
        const updatedItem = createExpCopy(id);
        updatedItem._dateFrom = dateFrom;
        setExpListWithUpdatedItem(updatedItem, id);
    }

    function updateExperienceDateTo(id, dateTo) {
        const updatedItem = createExpCopy(id);
        updatedItem._dateTo = dateTo;
        setExpListWithUpdatedItem(updatedItem, id);
    }

    function updateExperienceCompanyName(id, company) {
        const updatedItem = createExpCopy(id);
        updatedItem._company = company;
        setExpListWithUpdatedItem(updatedItem, id);
    }

    function updateExperiencePositionName(id, position) {
        const updatedItem = createExpCopy(id);
        updatedItem._position = position;
        setExpListWithUpdatedItem(updatedItem, id);
    }

    function findEducationWithId(id) {
        return educationList.find(edu => edu._id === id);
    }

    function createEduCopy(id) {
        return {...findEducationWithId(id)};
    }

    function updateEducationList(id, updatedItem) {
        setEducationList(educationList.map(edu => {
            if (edu._id !== id) {
                return edu;
            } else {
                return updatedItem;
            }
        }));
    }

    function updateEducationSchool(id, school) {
        const copiedEdu = createEduCopy(id);
        copiedEdu._school = school;
        updateEducationList(id, copiedEdu);
    }

    function updateEducationGpa(id, gpa) {
        const copiedEdu = createEduCopy(id);
        copiedEdu._gpa = gpa;
        updateEducationList(id, copiedEdu);
    }

    function updateEducationDateFrom(id, dateFrom) {
        const copiedEdu = createEduCopy(id);
        copiedEdu._dateFrom = dateFrom;
        updateEducationList(id, copiedEdu);
    }

    function updateEducationDateTo(id, dateTo) {
        const copiedEdu = createEduCopy(id);
        copiedEdu._dateTo = dateTo;
        updateEducationList(id, copiedEdu);
    }

    if (!inputEditable) {
        const nameDisplay = nameInput === '' ? 'Your name' : nameInput;
        const phoneNumDisplay = phoneNumInput === '' ? '123-456-789' : phoneNumInput;
        const emailDisplay = emailInput === '' ? 'abc@gmail.com' : emailInput;
        const addressDisplay = addressInput === '' ? '123 street, my state, 12345' : addressInput;
        return (
            <>
                <SwitchSection>
                    <EditFormButton text="Edit" clickHandler={setFromEditable}></EditFormButton>
                    <EditFormButton text="Preview" clickHandler={showPreview}></EditFormButton>
                </SwitchSection>
                <section className="preview">
                    <h2 className="resume-name">{nameDisplay}</h2>
                    <section className="general-info-container">
                        <p>{phoneNumDisplay} | {emailDisplay} | {addressDisplay}</p>
                    </section>
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
                </section>
            </>
        )
    }


    return (
        <>
            <SwitchSection>
                <EditFormButton text="Edit" clickHandler={setFromEditable}></EditFormButton>
                <EditFormButton text="Preview" clickHandler={showPreview}></EditFormButton>
            </SwitchSection>
            <section className="template">
                <div className="container">
                    <InfoSection infoTitle="General Info">
                        <InputContainer inputExample="e.g: John Joe">
                            <input
                                type="text"
                                placeholder="name"
                                onChange={(e) => setNameInput(e.target.value)}
                                value={nameInput}>
                            </input>
                        </InputContainer>
                        <InputContainer inputExample="e.g: 1234, Hero Street, My State.">
                            <input type="text"
                                   placeholder="address"
                                   onChange={(e) => setAddressInput(e.target.value)}
                                   value={addressInput}>
                            </input>
                        </InputContainer>
                        <InputContainer inputExample="e.g: joe151@email.com.">
                            <input
                                type="email"
                                placeholder="email"
                                onChange={(e) => setEmailInput(e.target.value)}
                                value={emailInput}>
                            </input>
                        </InputContainer>
                        <InputContainer lastInputInSection={true} inputExample="e.g: (123)-456-789">
                            <input
                                type="text"
                                placeholder="phone number"
                                onChange={(e) => setPhoneNumInput(e.target.value)}
                                value={phoneNumInput}>
                            </input>
                        </InputContainer>
                    </InfoSection>

                    <InfoSection infoTitle="Experience">
                        <ul>
                            {experienceList.map(experience => {
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
                            })}
                        </ul>
                        <AddButton clickHandler={addExperience}></AddButton>
                    </InfoSection>

                    <InfoSection infoTitle="Education">
                        <ul>
                            {educationList.map(education => {
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
                            })}
                        </ul>
                        <AddButton clickHandler={addEducation}></AddButton>
                    </InfoSection>
                </div>
            </section>
        </>
    )
}

export default App