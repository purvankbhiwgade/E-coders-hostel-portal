import React, { useState } from "react";

export default function InfoCollectForm() {
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
  const [values, setValues] = useState({
    fullName: "",
    regID: "",
    antiRagging: "",
    aadharCard: "",
    allotmentLetter: "",
    hostelFee: "",
  });
  //Errors
  const [errors, setErrors] = useState({
    fullName: "",
    regID: "",
    antiRagging: "",
    aadharCard: "",
    allotmentLetter: "",
    hostelFee: "",
  });
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
    if (
      JSON.stringify(values) ===
      JSON.stringify({
        fullName: "",
        regID: "",
        antiRagging: "",
        aadharCard: "",
        allotmentLetter: "",
        hostelFee: "",
      })
    ) {
      formLogin();
    } else {
      alert("There is an Error!");
    }
    setValues({
      fullName: "",
      regID: "",
      antiRagging: "",
      aadharCard: "",
      allotmentLetter: "",
      hostelFee: "",
    });
    setErrors({
      fullName: "",
      regID: "",
      antiRagging: "",
      aadharCard: "",
      allotmentLetter: "",
      hostelFee: "",
    });
  };

  const validate = (event, name, value) => {
    //A function to validate each input values
    console.log("validating");
    switch (name) {
      case "fullName":
        if (value.length === 0) {
          // we will set the error state

          setErrors({
            ...errors,
            fullName: "Required",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          // let newObj = omit(errors, "fullName");
          const { fullName, ...newObj } = errors;
          setErrors(newObj);
        }
        break;
      case "emailID":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            emailID: "Enter a valid email address",
          });
        } else {
          const { emailID, ...newObj } = errors;
          setErrors(newObj);
        }
        break;
      case "lastName":
        if (value.length === 0) {
          // we will set the error state

          setErrors({
            ...errors,
            lastName: "Required",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          // let newObj = omit(errors, "fullName");
          const { lastName, ...newObj } = errors;
          setErrors(newObj);
        }
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
      case "allotmentLetter":
      case "city":
        if (value.length === 0) {
          setErrors({
            ...errors,
            city: `Can't be left empty`,
          });
        } else {
          const { city, ...newObj } = errors;
          setErrors(newObj);
        }
        break;
      case "state":
      case "branch":
      case "regID":
        if (value.length < 9 || value.length > 9) {
          setErrors({
            ...errors,
            regID: `Registration ID can't be ${
              value.length < 9 ? "less" : "more"
            } than 9 digits`,
          });
        } else {
          const { regID, ...newObj } = errors;
          setErrors(newObj);
        }
        break;
      case "meritRank":
        if (!containsOnlyNumbers(value.meritRank)) {
          setErrors({
            ...errors,
            meritRank: `Please enter digits only`,
          });
        } else if (value.length < 10 || value.length > 10) {
          setErrors({
            ...errors,
            meritRank: `Phone number can't be ${
              value.length < 10 ? "less" : "more"
            } than 10 digits`,
          });
        } else {
          const { meritRank, ...newObj } = errors;
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto w-{1/2} max-w-lg px-4">
      <form className="w-full max-w-lg" onSubmit={onSubmit}>
        {/* Full Name & Registration */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="fullName"
              placeholder="Rahul"
              onChange={handleChange}
              value={values.fullName}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-emailID"
            >
              Registration ID
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="lastName"
              placeholder="Jain"
              onChange={handleChange}
              value={values.regID}
            />
          </div>
        </div>
        {/* Anti Ragging */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="file_input"
            >
              Anti Ragging
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="grid-password"
              type="file"
              name="emailID"
              placeholder="abc@orgName.com"
            />
            {/* {errors.emailID !== "" && (
              <span className="text-red-500 text-xs italic">
                {errors.emailID}
              </span>
            )} */}
          </div>
        </div>
        {/* Hostel Fee Receipt */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              for="file_input"
            >
              Hostel Fee Receipt
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="grid-city"
              type="file"
              name="hostelFeeReceipt"
              placeholder="Albuquerque"
              onChange={handleChange}
              value={values.city}
            />
          </div>
        </div>
        {/* Aadhar Card */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              for="file_input"
            >
              Aadhar Card
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="grid-city"
              type="file"
              name="aadharCard"
              placeholder="Albuquerque"
              onChange={handleChange}
              value={values.city}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 border-none">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 border-none"
              htmlFor="file_input"
            >
           Allotment
            </label>
            <input
              className="block h-12 flex justify-center align-center w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              name="aadharCard"
              onChange={handleChange}
              value={values.city}
            />
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
          Submit
        </button>
      </form>
    </div>
  );
}
