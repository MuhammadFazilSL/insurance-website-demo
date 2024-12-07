import React from 'react'
import arrowLeft from '../../assets/home/arrow-left.png'

const formsData = {
    carInsurance: {
        fields: [
            { label: "Vehicle Register Number", id: "registerNumber", placeholder: "PAX111" },
            { label: "Mobile Number", id: "mobileNumber", placeholder: "01987654321" },
            { label: "Post Code", id: "postCode", placeholder: "39000" },
            { label: "Identification Number", id: "identificationNumber", placeholder: ["NRIC", "560719086083"] },
            { label: "Email ID", id: "emailID", placeholder: "ajis002@gmail.com" },
            { label: "State", id: "state", placeholder: "PAHANG", readOnly: true },
        ],
    },
    hikerPA: {
        fields: [
            { label: "Name", id: "name", placeholder: "John Doe" },
            { label: "Mobile Number", id: "mobileNumber", placeholder: "01987654321" },
            { label: "Emergency Contact", id: "emergencyContact", placeholder: "01234567890" },
            { label: "Passport/ID Number", id: "passportId", placeholder: "A12345678" },
            { label: "State", id: "state", placeholder: "PAHANG", readOnly: true },
        ],
    },
    perlindunganTenangVoucher: {
        fields: [
            { label: "Voucher Code", id: "voucherCode", placeholder: "VOUCH1234" },
            { label: "Mobile Number", id: "mobileNumber", placeholder: "01987654321" },
            { label: "Email ID", id: "emailID", placeholder: "ajis002@gmail.com" },
            { label: "State", id: "state", placeholder: "PAHANG", readOnly: true },
        ],
    },
    travelInsurance: {
        fields: [
            { label: "Destination", id: "destination", placeholder: "Paris, France" },
            { label: "Travel Dates", id: "travelDates", placeholder: "DD/MM/YYYY - DD/MM/YYYY" },
            { label: "Mobile Number", id: "mobileNumber", placeholder: "01987654321" },
            { label: "Email ID", id: "emailID", placeholder: "ajis002@gmail.com" },
            { label: "State", id: "state", placeholder: "PAHANG", readOnly: true },
        ],
    },
    bicycleInsurance: {
        fields: [
            { label: "Bicycle Model", id: "bicycleModel", placeholder: "Giant XTC" },
            { label: "Bicycle Serial Number", id: "bicycleSerialNumber", placeholder: "SN123456789" },
            { label: "Mobile Number", id: "mobileNumber", placeholder: "01987654321" },
            { label: "State", id: "state", placeholder: "PAHANG", readOnly: true },
        ],
    },
    healthInsurance: {
        fields: [
            { label: "Policy Number", id: "policyNumber", placeholder: "POL123456" },
            { label: "Full Name", id: "fullName", placeholder: "John Doe" },
            { label: "Date of Birth", id: "dateOfBirth", placeholder: "DD/MM/YYYY" },
            { label: "Mobile Number", id: "mobileNumber", placeholder: "01987654321" },
            { label: "State", id: "state", placeholder: "PAHANG", readOnly: true },
        ],
    },
};


const DetailForms = (props) => {
    const formFields = formsData[props.selectedItem]?.fields || [];
 
  return (
    <div className="forms-section">
        <h2>{props.heading}</h2>
            <div className="label-inputs-area">
            
                   <div>
                   {formFields.slice(0, Math.ceil(formFields.length / 2)).map((field, index) => (
                   <span>
                       <label htmlFor="registerNumber">{field.label}</label>
                       {Array.isArray(field.placeholder) ? (
                                <span>
                                    {field.placeholder.map((ph, i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            name={field.id}
                                            id={field.id}
                                            placeholder={ph}
                                        />
                                    ))}
                                </span>
                            ) : (
                                <input
                                    type="text"
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    readOnly={field.readOnly}
                                />
                            )}
                     
                   </span>
                 
            ))}
               </div>
                 <div>
                 {formFields.slice(Math.ceil(formFields.length / 2)).map((field, index) => (
                 <span>
                     <label htmlFor="identificationNumber">{field.label}</label>
                     {Array.isArray(field.placeholder) ? (
                                <span>
                                    {field.placeholder.map((ph, i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            name={field.id}
                                            id={field.id}
                                            placeholder={ph}
                                        />
                                    ))}
                                </span>
                            ) : 
                            
                                field.readOnly ? (
                                    <span>
                                          <input
                                    type="text"
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    readOnly={field.readOnly}
                                />
                                <img src={arrowLeft} alt="" />
                                    </span>
                                )
                            :
                            (
                                <input
                                    type="text"
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    readOnly={field.readOnly}
                                />
                            )}
                          
                 </span> 
              ))}
             </div>
               
            </div>
            <div className="checkBox-area">
                <input type="checkbox" name='checkbox' id='checkbox'/>
                <label htmlFor="checkbox">By clicking Cet Quote, I agreed to the <span>Terms & Conditions</span> and <span>Privacy Policy</span></label>
            </div>
            <button>Get Quote</button>
        </div>
  )
}

export default DetailForms