import React, { useState } from "react";
import "./Details.css";
import deleteIcon from "../images/delete.png";

const Details = (props) => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    location: "",
  });
  const [detailsArray, setDetailsArray] = useState([]);

  const handleFormValues = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fnSubmitDetails = () => {
    console.log(formDetails);
    let details = [...detailsArray];
    details.push(formDetails);
    setFormDetails({ name: "", location: "" });
    setDetailsArray(details);
    console.log(details);
  };

  const fnDeleteDetails =(item) =>{
    let details = [...detailsArray];
    let index=details?.findIndex(de=>de.name===item.name);
    if(index>-1){
        details.splice(index,1);
    }
    setDetailsArray(details);
  }

  return (
    <div className="add-to-any-main-container">
      <div>
        <input
          type="text"
          className="input-details"
          placeholder="Enter name"
          name="name"
          value={formDetails?.name}
          onChange={(e) => handleFormValues(e)}
        />
        <br />

        <input
          type="text"
          className="input-details"
          placeholder="Enter location"
          name="location"
          value={formDetails?.location}
          onChange={(e) => handleFormValues(e)}
        />
        <br />
        <input
          type="button"
          disabled={formDetails?.name==="" || formDetails?.location===""}
          className={`submit-button ${formDetails?.name==="" || formDetails?.location===""?"disable":""}`}
          onClick={fnSubmitDetails}
          value="Submit"
        />

        {detailsArray?.length > 0 && (
          <div className="table-div">
            <table>
              <tr className="column">
                <th>Name</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
              {detailsArray?.map((item,i) => (
                <tr key={item.toString()}>
                  <td>{item?.name}</td>
                  <td>{item?.location}</td>
                  <td>{<img src={deleteIcon} className="delete-detail" onClick={()=>fnDeleteDetails(item)} />}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default Details;
