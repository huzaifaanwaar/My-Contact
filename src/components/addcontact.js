import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";


const AddContact = () => {
  const [loader, setLoader] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(!isDisabled)
  };

  const submitData = async (values) => {
    setLoader(true);
    const headers = {
      "Content-Type": "application/json",
    };
    const data = {
      fullname: values.fullname,
      lastname: values.lastname,
      email: values.email,
      Contact_No: values.Contact_No,
      Contact_Type: values.Contact_Type,
      current_address: values.current_address,

    };
    try {
      const result = await axios.post(
        'https://contactdetaildb-default-rtdb.firebaseio.com/ContactDB.json',
        data,
        headers
      );
      setLoader(false)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container bg-info align-center text-white mb-3 mt-3 p-5 w-50 border rounded shadow">
      <Formik
        initialValues={{
          fullname: "",
          lastname: "",
          email: "",
          Contact_No: "",
          Contact_Type: "",
          current_address: "",
        }}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .min(3, "Too Short!")
            .max(15, "Too Long!")
            .required("ٖFirstname is Required"),
          lastname: Yup.string()
            .min(3, "Too Short!")
            .max(15, "Too Long!")
            .required("Lastname is Required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is Requried"),

          Contact_No: Yup.number()
            .typeError("Only use number")
            .required("Contact Number is required"),
          Contact_Type: Yup.string().required("Contact Type is required"),
          current_address: Yup.string().required(
            "Address is required"
          ),
        })}
        onSubmit={(values) => {
          console.log("values", values);
          submitData(values)
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <h3 className="text-center fs-2">Add Content</h3>
            <hr />
            <div className="row">
              <div className="col-6">
                <label>Full Name :</label>
                <input disabled={isDisabled}
                  type="text"
                  className="form-control shadow"
                  placeholder="Full Name"
                  {...formik.getFieldProps("fullname")}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className="text-danger">{formik.errors.fullname}</div>
                ) : null}
              </div>

              <div className="col-6">
                <label>Last Name :</label>
                <input disabled={isDisabled}
                  type="text"
                  className="form-control shadow"
                  placeholder="Last Name"
                  {...formik.getFieldProps("lastname")}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className="text-danger">{formik.errors.lastname}</div>
                ) : null}
              </div>
            </div>
            <br />
            <div className="col">
              <label>Email :</label>

              <input disabled={isDisabled}
                type="text"
                className="form-control shadow"
                aria-label="Email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>

            <br />
            <div className="col">
              <label>Contact_No :</label>
              <input disabled={isDisabled}
                type="text"
                className="form-control shadow"
                aria-label="Mobile No"
                placeholder="i.e. +92 304 56XXXXX"
                {...formik.getFieldProps("Contact_No")}
              />
              {formik.touched.Contact_No && formik.errors.Contact_No ? (
                <div className="text-danger">{formik.errors.Contact_No}</div>
              ) : null}
            </div>
            <br />
            <div>
              <label>Contact Type :</label>
              <div className="input-group">
                <select disabled={isDisabled}
                  className="form-select shadow"
                  {...formik.getFieldProps("Contact_Type")}
                >
                  <option value="">Choose...</option>
                  <option value="1">No Label</option>
                  <option value="2">Mobile</option>
                  <option value="3">Work</option>
                  <option value="4">Fax</option>
                  <option value="5">Home</option>
                  <option value="6">Custom</option>
                </select>
              </div>
              {formik.touched.Contact_Type &&
                formik.errors.Contact_Type ? (
                <div className="text-danger">
                  {formik.errors.Contact_Type}
                </div>
              ) : null}
            </div>
            <br />
            <div className="col">
              <label>Address :</label>
              <input disabled={isDisabled}
                type="text"
                className="form-control shadow"
                aria-label="Current Address"
                placeholder="Address"
                {...formik.getFieldProps("current_address")}
              />
              {formik.touched.current_address &&
                formik.errors.current_address ? (
                <div className="text-danger">
                  {formik.errors.current_address}
                </div>
              ) : null}
            </div>
            <br />

            <div className="d-grid gap-2">
              <button className="btn btn-primary mt-2" type="submit" onClick={handleClick}>
                {loader ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
export default AddContact;




