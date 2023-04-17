import {Link} from "react-router-dom";
import "./media.css"
import Button from '@material-ui/core/Button';

export const Media = () => {
    return(
        <>
        <div className="image5"></div>
       <div class="card3">
        <h1>MEDIA</h1>
    </div>
    <div className="dropdown">
    <label for="MEDIA"></label>
    <select name="Media" id="Media">
        <option value="Select an option">Select an Option</option>
        <option value="Images">Images</option>
        <option value="Videos">Videos</option>
    </select></div>
    <div style={{
      display: 'flex',
      margin: 'auto',
      width: 400,
      flexWrap: 'wrap',
    }}></div>
      
        </>
    )
}