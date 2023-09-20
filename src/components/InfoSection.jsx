import {useState} from "react";
import '../GeneralInfo.css';

export function InfoSection() {

    const [nameInput, setNameInput] = useState("");
    const [addressInput, setAddressInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneNumInput, setPhoneNumInput] = useState("");

    const [display, setDisplay] = useState(false);

    function toggleEditable() {
        setDisplay(!display);
    }

    

    return (
        <section className="info-section">
            <form className="info-form">
                <input placeholder="name"
                       onChange={(e) => setNameInput(e.target.value)}
                       value={nameInput}>
                </input>
                <input placeholder="address"
                       onChange={(e) => setAddressInput(e.target.value)}
                       value={addressInput}>
                </input>
                <input placeholder="email"
                       onChange={(e) => setEmailInput(e.target.value)}
                       value={emailInput}>
                </input>
                <input placeholder="phone num"
                       onChange={(e) => setPhoneNumInput(e.target.value)}
                       value={phoneNumInput}>
                </input>
            </form>
            <button className="save-info-btn" onClick={toggleEditable}>
                Save
            </button>

        </section>
    )
}