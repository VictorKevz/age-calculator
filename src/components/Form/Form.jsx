import React from "react";
import iconArrow from "../../assets/images/icon-arrow.svg";
import { inputFields } from "./formData";
import "../css/form.css";

function Form({ formData, setFormData, validationErrors, setValidationErrors, setAge }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error message for the current field when the user types
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };

  const validateForm = () => {
    const errors = {};

    // Day validation
    if (!formData.day) {
      errors.day = "This field is required.";
    } else if (isNaN(formData.day) || formData.day < 1 || formData.day > 31) {
      errors.day = "Please enter a valid day";
    }

    // Month validation
    if (!formData.month) {
      errors.month = "This field is required.";
    } else if (isNaN(formData.month) || formData.month < 1 || formData.month > 12) {
      errors.month = "Please enter a valid month.";
    }

    // Year validation
    const currentYear = new Date().getFullYear();
    if (!formData.year) {
      errors.year = "This field is required.";
    } else if (isNaN(formData.year) || formData.year < 1500 || formData.year > currentYear) {
      errors.year = `Please enter a valid year`;
    }

    setValidationErrors(errors);

    // Return true if no errors, otherwise false
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Only calculate age if the form is valid
      calculateAge(formData.day, formData.month, formData.year);
    }
  };

  const calculateAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageDays += daysInPreviousMonth;
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  return (
    <section className="form-wrapper">
      <form autoComplete="off" onSubmit={handleSubmit} className="form-container">
        <div className="fields-wrapper">
          <div className="field-inputs-wrapper">
            {inputFields.map((field) => (
              <fieldset key={field.id} className="field">
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  type="text"
                  name={field.label}
                  value={formData[field.label]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  id={field.id}
                  className={`form-input ${field.label} ${validationErrors[field.label] ? 'input-error' : ''}`}
                />
                {validationErrors[field.label] && (
                  <span className="error-message">{validationErrors[field.label]}</span>
                )}
              </fieldset>
            ))}
          </div>
          <fieldset className="btn-field">
            <div className="divider"></div>
            <button type="submit" className="btn">
              <img src={iconArrow} alt="Icon arrow" className="icon-arrow" />
            </button>
          </fieldset>
        </div>
      </form>
    </section>
  );
}

export default Form;