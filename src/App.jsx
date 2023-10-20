import './App.css'
import {useState} from "react";
import Experience from "./data/Experience.js";
import Education from "./data/Education.js";
import {v4 as uuidv4} from 'uuid';
import {GeneralInfo} from "./components/GeneralInfo.jsx";
import {SwitchSection} from "./components/SwitchSection.jsx";
import {ExperienceSection} from "./components/ExperienceSection.jsx";
import {EducationSection} from "./components/EducationSection.jsx";
import {Preview} from "./components/Preview.jsx";

function App() {
    const [nameInput, setNameInput] = useState("");
    const [addressInput, setAddressInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneNumInput, setPhoneNumInput] = useState("");

    const [inputEditable, setInputEditable] = useState(true);

    const [experienceList, setExperienceList] = useState([]);
    const [educationList, setEducationList] = useState([]);

    function nameInputHandler(e) {
        setNameInput(e.target.value);
    }

    function addressInputHandler(e) {
        setAddressInput(e.target.value);
    }

    function emailInputHandler(e) {
        setEmailInput(e.target.value);
    }

    function phoneInputHandler(e) {
        setPhoneNumInput(e.target.value);
    }

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
        const personalInfo = {
            phoneNumDisplay: phoneNumDisplay,
            emailDisplay: emailDisplay,
            addressDisplay: addressDisplay
        }

        const headerInfo = {
            name: nameDisplay,
            personalInfo: personalInfo
        }
        return (
            <>
                <SwitchSection
                    editHandler={setFromEditable}
                    previewHandler={showPreview}>
                </SwitchSection>
                <Preview
                    headerInfo={headerInfo}
                    educationList={educationList}
                    experienceList={experienceList}>
                </Preview>
            </>
        )
    }

    return (
        <>
            <SwitchSection
                editHandler={setFromEditable}
                previewHandler={showPreview}>
            </SwitchSection>
            <section className="template">
                <div className="container">
                    <GeneralInfo
                        nameInputHandler={nameInputHandler}
                        addressInputHandler={addressInputHandler}
                        emailInputHandler={emailInputHandler}
                        phoneInputHandler={phoneInputHandler}
                        nameInput={nameInput}
                        addressInput={addressInput}
                        emailInput={emailInput}
                        phoneNumInput={phoneNumInput}>
                    </GeneralInfo>

                    <ExperienceSection
                        experienceList={experienceList}
                        updateExperienceCompanyName={updateExperienceCompanyName}
                        updateExperiencePositionName={updateExperiencePositionName}
                        updateExperienceDateFrom={updateExperienceDateFrom}
                        updateExperienceDateTo={updateExperienceDateTo}
                        deleteExperience={deleteExperience}
                        addExperience={addExperience}>
                    </ExperienceSection>

                    <EducationSection
                        educationList={educationList}
                        updateEducationSchool={updateEducationSchool}
                        updateEducationGpa={updateEducationGpa}
                        updateEducationDateFrom={updateEducationDateFrom}
                        updateEducationDateTo={updateEducationDateTo}
                        deleteEducation={deleteEducation}
                        addEducation={addEducation}>
                    </EducationSection>
                </div>
            </section>
        </>
    )
}

export default App