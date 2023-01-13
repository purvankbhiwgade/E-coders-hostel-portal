import React, { useState } from "react";

export default function ApplicationForm() {
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
    firstName: "",
    lastName: "",
    emailID: "",
    phoneNumber: "",
    category: "open",
    city: "",
    state: "Andhra Pradesh",
    regID: "",
    branch: "Computer Engineering",
    meritRank: "",
  });
  //Errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    emailID: "",
    phoneNumber: "",
    category: "",
    city: "",
    state: "",
    regID: "",
    branch: "",
    meritRank: "",
  });
  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  };
  //Custom hook call
  // const { handleChange, values, errors, handleFormSubmit } = useForm(formLogin);
  const allStates = (
    <select
      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-state"
      name="state"
      onChange={handleChange}
      value={values.state}
    >
      <option value="Andhra Pradesh">Andhra Pradesh</option>
      <option value="Andaman and Nicobar Islands">
        Andaman and Nicobar Islands
      </option>
      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
      <option value="Assam">Assam</option>
      <option value="Bihar">Bihar</option>
      <option value="Chandigarh">Chandigarh</option>
      <option value="Chhattisgarh">Chhattisgarh</option>
      <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
      <option value="Daman and Diu">Daman and Diu</option>
      <option value="Delhi">Delhi</option>
      <option value="Lakshadweep">Lakshadweep</option>
      <option value="Puducherry">Puducherry</option>
      <option value="Goa">Goa</option>
      <option value="Gujarat">Gujarat</option>
      <option value="Haryana">Haryana</option>
      <option value="Himachal Pradesh">Himachal Pradesh</option>
      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
      <option value="Jharkhand">Jharkhand</option>
      <option value="Karnataka">Karnataka</option>
      <option value="Kerala">Kerala</option>
      <option value="Madhya Pradesh">Madhya Pradesh</option>
      <option value="Maharashtra">Maharashtra</option>
      <option value="Manipur">Manipur</option>
      <option value="Meghalaya">Meghalaya</option>
      <option value="Mizoram">Mizoram</option>
      <option value="Nagaland">Nagaland</option>
      <option value="Odisha">Odisha</option>
      <option value="Punjab">Punjab</option>
      <option value="Rajasthan">Rajasthan</option>
      <option value="Sikkim">Sikkim</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Telangana">Telangana</option>
      <option value="Tripura">Tripura</option>
      <option value="Uttar Pradesh">Uttar Pradesh</option>
      <option value="Uttarakhand">Uttarakhand</option>
      <option value="West Bengal">West Bengal</option>
    </select>
  );

  const allBranches = (
    <select
      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-state"
      name="branch"
      onChange={handleChange}
      value={values.branch}
    >
      <option value="Computer Engineering">Computer Engineering</option>
      <option value="Information Technology">Information Technology</option>
      <option value="Electronics & Telecommunication Engineering">
        Electronics & Telecommunication Engineering
      </option>
      <option value="Electronics Engineering">Electronics Engineering</option>
      <option value="Electrical Engineering">Electrical Engineering</option>
      <option value="Mechanical Engineering">Mechanical Engineering</option>
      <option value="Civil Engineering">Civil Engineering</option>
      <option value="Production Engineering">Production Engineering</option>
      <option value="Textile Engineering">Textile Engineering</option>
    </select>
  );

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("hi ");
    event.preventDefault();
    console.log("handleFormSubmit");
    if (event) event.preventDefault();
    console.log(errors, values);
    if (JSON.stringify(values) === JSON.stringify({
      firstName: "",
      lastName: "",
      emailID: "",
      phoneNumber: "",
      category: "",
      city: "",
      state: "",
      regID: "",
      branch: "",
      meritRank: "",
    })) {
      formLogin();
    } else {
      alert("There is an Error!");
    }
    setValues({
      firstName: "",
      lastName: "",
      emailID: "",
      phoneNumber: "",
      category: "open",
      city: "",
      state: "Andhra Pradesh",
      regID: "",
      branch: "Computer Engineering",
      meritRank: "",
    });
    setErrors({
      firstName: "",
      lastName: "",
      emailID: "",
      phoneNumber: "",
      category: "",
      city: "",
      state: "",
      regID: "",
      branch: "",
      meritRank: "",
    });
  };

  const validate = (event, name, value) => {
    //A function to validate each input values
    console.log("validating");
    switch (name) {
      case "firstName":
        if (value.length === 0) {
          // we will set the error state

          setErrors({
            ...errors,
            firstName: "Required",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          // let newObj = omit(errors, "firstName");
          const { firstName, ...newObj } = errors;
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
          // let newObj = omit(errors, "firstName");
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
      case "category":
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
        {/* First Name & Last Name */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="firstName"
              placeholder="Rahul"
              onChange={handleChange}
              value={values.firstName}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="lastName"
              placeholder="Jain"
              onChange={handleChange}
              value={values.lastName}
            />
          </div>
        </div>
        {/* Email ID */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email-id"
            >
              Email ID
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.emailID !== "" ? "border-red-500" : "border-gray-200"
              }  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              id="grid-password"
              type="text"
              name="emailID"
              placeholder="abc@orgName.com"
              onChange={handleChange}
              value={values.emailID}
            />
            {errors.emailID !== "" && (
              <span className="text-red-500 text-xs italic">
                {errors.emailID}
              </span>
            )}
          </div>
        </div>
        {/* Phone Number & Category */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Phone number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              name="phoneNumber"
              placeholder="10 digits only"
              onChange={handleChange}
              value={values.phoneNumber}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="category"
                onChange={handleChange}
                value={values.category}
              >
                <option value="Open">Open</option>
                <option value="OBC">OBC</option>Open
                <option value="VJ/NT">VJ/NT</option>
                <option value="SE/BC">SE/BC</option>
                <option value="SC/ST">SC/ST</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* City & State */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              name="city"
              placeholder="Albuquerque"
              onChange={handleChange}
              value={values.city}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              {allStates}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Reg ID, Branch and meritrank */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Registration ID
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              name="regID"
              placeholder="9 digit only"
              onChange={handleChange}
              value={values.regID}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Branch
            </label>
            <div className="relative">
              {allBranches}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Merit Rank
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              name="meritRank"
              placeholder="99.999"
              onChange={handleChange}
              value={values.meritRank}
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
          Sign In
        </button>
      </form>
    </div>
  );
}
