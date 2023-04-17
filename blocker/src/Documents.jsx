import "./Login"
import "./docu.css"
export const Documents = () => {
    return(
        <>
        <div className="image6"></div>
        <h2>DOCUMENTS</h2>
    <div className="dropdown1">
    <label for="Documents">Select an option</label>
    <select name="Documents" id="Documents">
        <option value="Select an option"></option>
        <option value="PDF">PDF</option>
        <option value="WORD">WORD</option>
        <option value="SHEET">SHEET</option>
        <option value="PPT">PPT</option>
    </select></div>
    </>
    )
}
