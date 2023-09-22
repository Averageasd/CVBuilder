import {useState} from "react";
import '../GeneralInfo.css';


export function InfoSection( {infoTitle} ) {

    const [nameInput, setNameInput] = useState("");
    const [addressInput, setAddressInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneNumInput, setPhoneNumInput] = useState("");
    const [inputEditable, setInputEditable] = useState(true);

    function toggleEditable(e) {
        e.preventDefault();
        setInputEditable(false);
    }

    console.log(inputEditable);
    return (
        <section className="info-section">
            <form className="info-form">
                <h2>{infoTitle}</h2>
                <article className="input-container">
                    <input placeholder="name"
                           onChange={(e) => setNameInput(e.target.value)}
                           contentEditable={inputEditable}
                           value={nameInput}>
                    </input>
                    <p className="input-example">e.g: John Joe.</p>
                </article>
                <article className="input-container">
                    <input placeholder="address"
                           onChange={(e) => setAddressInput(e.target.value)}
                           value={addressInput}>
                    </input>
                    <p className="input-example">e.g: 1234, Hero Street, My State.</p>
                </article>
                <article className="input-container">
                    <input placeholder="email"
                           onChange={(e) => setEmailInput(e.target.value)}
                           value={emailInput}>
                    </input>
                    <p className="input-example">e.g: joe151@email.com.</p>
                </article>
                <article className="input-container">
                    <input placeholder="phone num"
                           onChange={(e) => setPhoneNumInput(e.target.value)}
                           value={phoneNumInput}>
                    </input>
                    <p className="input-example">e.g: John Joe.</p>
                </article>

                <button type="submit" className="save-info-btn" onClick={toggleEditable}>
                    Save
                </button>
            </form>
        </section>
    )
}