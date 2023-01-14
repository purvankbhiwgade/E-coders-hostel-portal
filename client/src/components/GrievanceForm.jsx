import React, { useState } from "react";

export default function GrievanceForm() {
    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
      }
  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);
    //Let's set these values in state

    setValues({
      ...values, //spread operator to store old values
      [name]: val,
    });
  };
  //Form values

  const emptyFieldValue = {
    studentName: "",
    roomNo: "",
    phoneNumber: "",
    subject: "",
    description: "",
  };
  const [values, setValues] = useState(emptyFieldValue);
  //Errors
  const [errors, setErrors] = useState(emptyFieldValue);
  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("hi ");
    event.preventDefault();
    console.log("handleFormSubmit");
    if (event) event.preventDefault();
    console.log(errors, values);
    if (JSON.stringify(values) === JSON.stringify(emptyFieldValue)) {
      formLogin();
    } else {
      alert("There is an Error!");
    }
    setValues(emptyFieldValue);
    setErrors(emptyFieldValue);
  };

  const validate = (event, name, value) => {
    //A function to validate each input values
    console.log("validating");
    switch (name) {
      case "studentName":
        if (value.length === 0) {
          // we will set the error state

          setErrors({
            ...errors,
            studentName: "Required",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          // let newObj = omit(errors, "studentName");
          const { studentName, ...newObj } = errors;
          setErrors(newObj);
        }
        break;
      case "roomNo":
        break;
      case "phoneNumber":
        if (!containsOnlyNumbers(value.phoneNumber)) {
          setErrors({
            ...errors,
            phoneNumber: `Please enter digits only`,
          });
        } else if (value.length < 10 || value.length > 10) {
          setErrors({
            ...errors,
            phoneNumber: `Phone number can't be ${
              value.length < 10 ? "less" : "more"
            } than 10 digits`,
          });
        } else {
          const { phoneNumber, ...newObj } = errors;
          setErrors(newObj);
        }
        break;
      case "subject":
        if (value.length === 0) {
          // we will set the error state

          setErrors({
            ...errors,
            lastName: "Required",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          // let newObj = omit(errors, "studentName");
          const { lastName, ...newObj } = errors;
          setErrors(newObj);
        }
        break;
      case "description":
        if (value.length === 0) {
          // we will set the error state

          setErrors({
            ...errors,
            lastName: "Required",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          // let newObj = omit(errors, "studentName");
          const { lastName, ...newObj } = errors;
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto w-{1/2} max-w-lg px-4 mt-12">
      <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
        {/* Student Name & Room number*/}
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-3/4 px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-student-name"
            >
              Student Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-student-name"
              type="text"
              name="studentName"
              placeholder="Rahul Jain"
              onChange={handleChange}
              value={values.studentName}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-1/4 px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-roomNo"
            >
              Room No.
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-roomNo"
              type="text"
              name="roomNo"
              placeholder="A-107"
              onChange={handleChange}
              value={values.roomNo}
            />
          </div>
        </div>
        {/* Phone Number */}
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-3/4 px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-phoneNumber"
            >
              Phone number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phoneNumber"
              type="text"
              name="phoneNumber"
              placeholder="10 digits only"
              onChange={handleChange}
              value={values.phoneNumber}
            />
          </div>
        </div>
        {/* Subject */}
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-2 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-subject"
            >
              Grievance Subject
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-student-name"
              type="text"
              name="subject"
              placeholder="Enter your grievance in short"
              onChange={handleChange}
              value={values.subject}
            />
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-2 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-description"
            >
              Grievance Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-description"
              type="text"
              rows="6"
              name="description"
              placeholder="Enter your grievance in detail"
              onChange={handleChange}
              value={values.description}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          // onSubmit={(event) => {
          //   event.preventDefault();
          //   console.log("hi ");
          //   handleSubmit(event);
          // }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
