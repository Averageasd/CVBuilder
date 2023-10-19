import {InputContainer} from "./InputContainer.jsx";
import {InfoSection} from "./InfoSection.jsx";

export function GeneralInfo(
    {
        nameInputHandler,
        addressInputHandler,
        emailInputHandler,
        phoneInputHandler,
        nameInput,
        addressInput,
        emailInput,
        phoneNumInput
    }
) {
    return (
        <InfoSection infoTitle="General Info">
            <InputContainer inputExample="e.g: John Joe">
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => nameInputHandler(e)}
                    value={nameInput}>
                </input>
            </InputContainer>
            <InputContainer inputExample="e.g: 1234, Hero Street, My State.">
                <input type="text"
                       placeholder="address"
                       onChange={(e) => addressInputHandler(e)}
                       value={addressInput}>
                </input>
            </InputContainer>
            <InputContainer inputExample="e.g: joe151@email.com.">
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => emailInputHandler(e)}
                    value={emailInput}>
                </input>
            </InputContainer>
            <InputContainer lastInputInSection={true} inputExample="e.g: (123)-456-789">
                <input
                    type="text"
                    placeholder="phone number"
                    onChange={(e) => phoneInputHandler(e)}
                    value={phoneNumInput}>
                </input>
            </InputContainer>
        </InfoSection>
    )

}