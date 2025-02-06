import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ui/styles/RegisterPage.css";
import Title from "../Assets/Title";
import Dropdown from "react-select";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Option {
  value: string;
  label: string;
}
interface FormDataPageProps {
  namePage: string;
}

const FormDataPage : React.FC<FormDataPageProps> = ({ namePage })  => {
  const data: Option[] = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [age, setAge] = React.useState("");

  const handleChangeAge = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };


  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      console.log("Selected:", selectedOption);
    }
  };

  return (
    <div >
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <div >
            <Title modulename={namePage} />
            <div>
              <form className="row g-3" style={{ padding: "5px", margin: "10px", border: "1px solid black", borderRadius: "10px" }}>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>

                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">State</label>
                    <Dropdown<Option>
                      options={data}
                      onChange={handleChange}
                      isSearchable={true} // Enable search functionality
                      placeholder="Select a fruit"
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-5 col-md-6">
                    <label className="form-label">Drop Down</label>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      fullWidth
                      onChange={handleChangeAge}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </div>
                  <div className="col-sm 5 ">
                    <div className="d-flex flex-column justify-content-center h-100">
                      <label className="form-label mb-2">Date Picker</label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker/>
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="col-sm 5">
                    <div className="d-flex flex-column justify-content-center h-100">
                      <label className="form-label mb-2">Date Picker</label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker/>
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Example textarea</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                  ></textarea>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label">Check me out</label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDataPage;
