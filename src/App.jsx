import './App.css'
import {InfoSection} from "./components/InfoSection.jsx";
import {useState} from "react";
import {InputContainer} from "./components/InputContainer.jsx";
import {AddButton} from "./components/AddButton.jsx";
import Experience from "./data/Experience.js";
import {v4 as uuidv4} from 'uuid';
import dateFormat, { masks } from "dateformat";

function App() {
    const [nameInput, setNameInput] = useState("");
    const [addressInput, setAddressInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneNumInput, setPhoneNumInput] = useState("");

    const [inputEditable, setInputEditable] = useState(true);

    const [experienceList, setExperienceList] = useState([]);

    function addExperience() {
        const experience = Experience(uuidv4(), 'Company', 'position', new Date());
        const newList = [...experienceList];
        newList.push(experience);
        setExperienceList(newList);
    }

    function changeTypeToDate(e) {
        e.target.type = 'date';
    }

    return (
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
                <InfoSection lastSection={true} infoTitle="Experience">
                    <ul>
                        {experienceList.map(experience => {
                            return (
                                <li key={experience._id}>
                                    <InputContainer inputExample="e.g: Hero Company">
                                        <input
                                            type="text"
                                            placeholder="company"
                                        >
                                        </input>
                                    </InputContainer>

                                    <InputContainer inputExample="e.g: Software engineer">
                                        <input
                                            type="text"
                                            placeholder="position"
                                        >
                                        </input>
                                    </InputContainer>
                                    <InputContainer inputExample="e.g: Software engineer">
                                        <label>
                                            From Date:
                                            <input
                                                type="date"
                                                defaultValue={dateFormat(experience._date,'yyyy-mm-dd')}
                                                placeholder="position"
                                            >
                                            </input>
                                        </label>

                                    </InputContainer>
                                    <hr></hr>
                                </li>

                            )
                        })}
                    </ul>
                    <AddButton clickHandler={addExperience}></AddButton>
                </InfoSection>
            </div>
        </section>
    )
}

export default App