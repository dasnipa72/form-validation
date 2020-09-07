import React from 'react';
import './App.css';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Select, { components } from 'react-select';

const gender=[
  { label:"Male", value:1},
  { label:"Female", value:2},
  { label:"Others", value:3}
]
const month=[
  { label:"January"  , value:"January" },
  { label: "February" , value:"February" },
  { label:"March"  , value:"March" },
  { label:"April"  , value:"April" },
  { label:"May"  , value: "May"},
  { label:"June"  , value:"June" },
  { label:"July"  , value:"July" },
  { label:"August"  , value:"August" },
  { label:"Septembar"  , value: "Septembar"},
  { label:"Octobar"  , value:"Octobar" },
  { label:"Novembar"  , value:"Novembar" },
  { label:"Decembar"  , value:"Decembar" },
]
const day=[
  { label: 1, value: 1},
  { label: 2, value: 2},
  { label: 3, value: 3},
  { label: 4, value: 4},
  { label: 5, value: 5},
  { label: 6, value: 6},
  { label: 7, value: 7},
  { label: 8, value: 8},
  { label: 9, value: 9},
  { label: 10, value: 10},
  { label: 11, value: 11},
  { label: 12, value: 12},
  { label: 13, value: 13},
  { label: 14, value: 14},
  { label: 15, value: 15},
  { label: 16, value: 16},
  { label: 17, value: 17},
  { label: 18, value: 18},
  { label: 19, value: 19},
  { label: 20, value: 20},
  { label: 21, value: 21},
  { label: 22, value: 22},
  { label: 23, value: 23},
  { label: 24, value: 24},
  { label: 25, value: 25},
  { label: 26, value: 26},
  { label: 27, value: 27},
  { label: 28, value: 28},
  { label: 29, value: 29},
  { label: 30, value: 30},
  { label: 31, value: 31},
]
const year=[
  {label: 1995, value: 1995},
  {label: 1996, value: 1996},
  {label: 1997, value: 1997},
  {label: 1998, value: 1998},
  {label: 1999, value: 1999},
]
const courses=[
  { label:"Course 1" , value:"Course 1"},
  { label:"Course 2" , value:"Course 2"},
  { label:"Course 3" , value:"Course 3"},
  { label:"Course 4" , value:"Course 4"},
]
const fields={
  firstName:'',
  middleName:'',
  lastName:'',
  month:'',
  day:'',
  year:'',
  gender:'',
  streetAddress:'',
  streetAddress2:'',
  city:'',
  state:'',
  postal:'',
  email:'',
  mobileNumber:'',
  phoneNumber:'',
  workNumber:'',
  company:'',
  courses:'',
  comments:''
}
const validateForm = (errors) =>{
  let formValid=true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (formValid = false)
  );
  // Object.values(fields).forEach(
  //   (val) => val.length > 0 && (formValid = false)
  // )
  return formValid;
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      fields:fields,
      errors:fields
    }
    this.handleChange=this.handleChange.bind(this);
    this.handlClear=this.handlClear.bind(this);
    this.submitForm=this.submitForm.bind(this);
  }
  
  handleChange(e){
    // e.preventDefault();
    const { name, value }= e.target;
    let errors= this.state.errors;

    switch(name){

      case 'firstName':
        errors.firstName = value.length > 5 ? 'First name must be less than 5' : !value.match(/^[a-zA-Z]*$/) ? 'First name must be alphabetic only'
        : value.length === 0 ? 'First name cannot be null ' : '';
        break;

      case 'middleName':
        errors.middleName = value.length> 5 ? 'Middle name must be less than 5' : !value.match(/^[a-zA-Z]*$/)? 'Middle name must be alphabetic only' : '';
        break;

      case 'lastName':
        errors.lastName = value.length> 5 ? 'last name must be less than 5' : 
          !value.match(/^[a-zA-Z]*$/) ? 'last name must be alphabetic only' : 
            value.length === 0 ? 'last name cannot be null' : '';
        break;
      // case 'day':
      //   if(value.length === 0){
      //     errors.day = 'Date cannot be null';
      //   }
      //   break;
      // case 'month':
      //   if(value.length === 0){
      //   errors.month = 'Month cannot be null';
      //   }
      //   break;
      // case 'year':
      //   if(value.length === 0){
      //       errors.year = 'Year cannot be null';
      //   }
      //   break;
      // case 'gender':
      //   if(value.length === 0){
      //     errors.gender = 'gender cannot be null';
      //   }
      //     break;
      case 'streetAddress':
        errors.streetAddress = value.length > 20 ? 'Street Address mustt be less than 20 characters' : value.length === 0 ? 'Street Address cannot be null' : '';
        break;

      case 'city':
        errors.city= value.length === 0 ?  'city cannot be null' : '';
        break;

      case 'state':
        errors.state = value.length === 0 ? 'state cannot be null' :  !value.match(/^[a-zA-Z]*$/) ? 'Enter only alphabetic character' : '';
        break;

      case 'postal':
        errors.postal = !value.match(/^[0-9]{6}$/) ? 'please enter a valid postal/zip code ' : value.length === 0 ? 'postal cannot be null' :'';
        break;
        
      case 'email':
        errors.email= !value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) ? 'please enter a valid email id' 
        : value.length === 0 ? 'Email cannot be null' : '' ;
        break;

      case 'mobileNumber':
        errors.mobileNumber= !value.match(/^[1-9]{1}[0-9]{9}$/) ? 'Please Enter a valid mobile number' : value.length === 0 ? 'mobile Number cannot be null' : '';
        break;

      case 'phoneNumber':
        errors.phoneNumber= !value.match(/^[1-9]{1}[0-9]{9}$/) ? 'Please Enter a valid phone number' : '';
        break;

      case 'workNumber':
        errors.workNumber=  !value.match(/^[1-9]{1}[0-9]{9}$/) ? 'Please Enter a valid work number' : '';
        break;

      case 'company': 
          errors.company= value.length === 0? 'Please Enter a company name' : '';
        break;

      default: 
        break;
    }
    this.setState({ errors, [name]:value });
    // console(this.state.fields);
  }

  submitForm(e){
    e.preventDefault();
    if(validateForm(this.state.errors)){
      console.info('valid form');
      console.log(this.state.errors);
      alert('Form Submitted Successfully')
      // this.setState({
      //   errors:fields,
      //   fields: fields
      // });
    }else{
      // if(this.state.fields === fields)
      console.info('Invalid Form');
      console.log(this.state.errors);
      alert('Invalid Form');
    } 
  }

  

    
  handlClear(){
    this.setState({
      fields:{},
      errors:{}
    })
  }

  render(){
    const {errors} = this.state;
  return (
    <div className="container"  style={{backgroundColor:"#cfd6e0", paddingTop:"10px", paddingBottom:"10px" }}>
    <div className="right m-5">

      <header className="mb-5">
      <h3><b>Student Registration Form</b></h3>
      <h6>fill out the form carefully for Registration</h6>
      </header>
      <form>

        <label htmlFor="Student name"><h5> Student Name </h5></label><br />      
        <div className="list row mb-3"> 
          <div className="form-group col-md-4"> 
            <input name="firstName"
            type="text"
            className="form-control"
            // placeholder="First Name"
            // value='name'
            onChange={this.handleChange}
            // required
            id="fname"/>
            <label htmlFor="first name" className="mt-2"> First Name</label>
            {/* {errors.firstName.length > 0 &&  */}
            <div style={{ color: "red" }}> {errors.firstName} </div>
            {/* // <span className='error'>{errors.firstName} </span>} */}
            
          </div>
          <div className="col-md-4">
            <input name="middleName"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            // placeholder="Middle Name"
            // value='name'
            // required
            id="mname"/>
            <label htmlFor="middle name" className="mt-2"> Middle Name</label>
            <div style={{ color: "red" }}> {errors.middleName} </div>
          </div>
          <div className="col-md-4">
            <input name="lastName"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            // value='Last name'
            // required
            id="lname"/>
            <label htmlFor="last name" className="mt-2"> Last Name</label>
            <div style={{ color: "red" }}> {errors.lastName} </div>
          </div>
        </div>       
        <div className="list row">
          <div className="col-md-6">
          <label htmlFor="birth date"><h5> Birth Date </h5></label>
          </div>
          <div className="col-md-6">
          <label htmlFor="gender"><h5> Gender </h5></label>
          </div>
        </div>
        <div className="list row mb-3">
          <div className="col-md-6">
            <div className="liast row">
              <div className="col-md-4">
                  <Select required options={day} name="day" /> 
                  <label htmlFor="date" className="mt-2">Date</label>
                  <div style={{ color: "red" }}> {errors.day} </div>
              </div>
              <div className="col-md-4">
              <Select options={month} name="month" />
              <label htmlFor="month" className="mt-2">Month</label>
              </div>
              <div className="col-md-4">
              <Select options={year} name="year" />
              <label htmlFor="year" className="mt-2">Year</label>
              </div>
          </div>
          </div>
          <div className="col-md-6">
             <Select options={gender} name="gender"/>
          </div>
        </div>
        <label htmlFor="Address"><h5> Address </h5></label>
        <div className="list row mb-3">
          <div className="col">
            <input name="streetAddress"
                type="text"
                className="form-control"
                onChange={this.handleChange}
                // value='Address'
                // required
                id="street address"/>
              <label htmlFor="street address" className="mt-2">Street Address </label>
              <div style={{ color: "red" }}> {errors.streetAddress} </div>
          </div>
        </div>
        <div className="list row mb-3">
          <div className="col">
            <input name="streetAddress2"
                type="text"
                className="form-control"
                onChange={this.handleChange}
                // value='Address'
                id="street address2"/>
              <label htmlFor="street address2" className="mt-2">Street Address Line 2 </label>
              <div style={{ color: "red" }}> {errors.streetAddress2} </div>
          </div>
        </div>
        <div className="list row mb-3">
          <div className="col-md-6">
          <input name="city"
                type="text"
                className="form-control"
                onChange={this.handleChange}
                // value='Address'
                // required
                id="city"/>
              <label htmlFor="city" className="mt-2">City </label>
              <div style={{ color: "red" }}> {errors.city} </div>
          </div>
          <div className="col-md-6">
          <input name="state"
                type="text"
                className="form-control"
                onChange={this.handleChange}
                // value='Address'
                // required
                id="state"/>
              <label htmlFor="state" className="mt-2">State/Province </label>
              <div style={{ color: "red" }}> {errors.state} </div>
          </div>
        </div>
        <div className="list row mb-3">
          <div className="col">
          <input name="postal"
                type="text"
                className="form-control"
                onChange={this.handleChange}
                // value='Address'
                // required
                id="postal"/>
              <label htmlFor="postal" className="mt-2">Postal/Zip Code </label>
              <div style={{ color: "red" }}> {errors.postal} </div>
          </div>
        </div>
        <div className="list row">
          <div className="col-md-6">
          <label htmlFor="email"><h5> Student Email </h5></label>
          </div>
          <div className="col-md-6">
          <label htmlFor="mnumber"><h5> Mobile Number </h5></label>
          </div>
        </div>
        <div className="list row mb-3">
        <div className="col-md-6">
          <input name="email"
                type="email"
                className="form-control"
                placeholder="myname@example.com"
                onChange={this.handleChange}
                // value='Address'
                // required
                id="email"/>
              <label htmlFor="email" className="mt-2">myname@example.com </label>
              <div style={{ color: "red" }}> {errors.email} </div>
          </div>
          <div className="col-md-6">
          <input name="mobileNumber"
                type="text"
                className="form-control"
                placeholder="(000-000-0000)"
                onChange={this.handleChange}
                // value='Address'
                // required
                id="mnumber"/>
              <div style={{ color: "red" }}> {errors.mobileNumber} </div>
          </div>
        </div>
        <div className="list row">
          <div className="col-md-6">
          <label htmlFor="phonenumber"><h5> Phone Number </h5></label>
          </div>
          <div className="col-md-6">
          <label htmlFor="worknumber"><h5> Work Number </h5></label>
          </div>
        </div>
        <div className="list row mb-3">
        <div className="col-md-6">
          <input name="phoneNumber"
                type="text"
                className="form-control"
                placeholder="(000-000-0000)"
                onChange={this.handleChange}
                // value='Address'
                // required
                id="phonenumber"/>
            <div style={{ color: "red" }}> {errors.phoneNumber} </div>
          </div>
          <div className="col-md-6">
          <input name="workNumber"
                type="text"
                className="form-control"
                placeholder="(000-000-0000)"
                onChange={this.handleChange}
                // value='Address'
                // required
                id="worknumber"/>
                <div style={{ color: "red" }}> {errors.workNumber} </div>
          </div>
        </div>
        <label htmlFor="company"><h5> Company </h5></label>
        <div className="list row mb-3">
          <div className="col-md-6">
            <input name="company"
                type="text"
                className="form-control"
                onChange={this.handleChange}
                // value='Address'
                // required
                id="company"/>
            <div style={{ color: "red" }}> {errors.company} </div>
          </div>
          </div>
        <label htmlFor="company"><h5> Courses </h5></label>
        <div className="list row mb-3">
          <div className="col-md-6">
            <Select options={courses} name="courses"/>
            <div style={{ color: "red" }}> {errors.courses} </div>
          </div>
          </div>
        <label htmlFor="coments"><h5> Additional Comments </h5></label>
        <div className="list row mb-5">
          <div className="col">
          <textarea name="coments"
                type="text"
                className="form-control"
                onChange={this.handleChange}
                rows="7"
                // value='Address'
                id="comments"/>
          <div style={{ color: "red" }}> {errors.comments} </div>
          </div>
          </div>

        <div className="list row mb-3">
          <div className="submit col-md-6">
          <button className="btn btn-success" onClick={this.submitForm}>
              Submit Application
          </button>    
          </div>
          <div className="col-md-6">
          <button className="btn btn-success" onClick={this.handlClear}>
              Clear Fields
          </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );}
}

export default App;
