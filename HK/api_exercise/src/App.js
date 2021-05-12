import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: "https://6kb2p9kgb0.execute-api.eu-west-2.amazonaws.com/",
  headers: {"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExOCIsImNvbnN1bWVyTmFtZSI6IkludGVydmlld3MiLCJjb25zdW1lclR5cGUiOiIxIiwibmJmIjoxNjIwMzk5NDM3LCJleHAiOjE5MzU5MzIyMzcsImlhdCI6MTYyMDM5OTQzN30.m5Kfn9sQToLnF8mh57GLQYrJnrCQyC0reRuOgT9xv0M"}
})


class App extends Component {

  state = {
    postcode: "",
    hasError: false,
    errorMessage: ""
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleApiError = (errorObject) => {
    this.setState({hasError: true})
    this.setState({errorMessage: errorObject})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let givenPostcode = this.state.postcode;
    api.get(`production/api/v1/addresses/?postcode=${givenPostcode}`)
    .catch((error) => {this.handleApiError(error.response.data)})
    // let regex = [A-Za-z][1-9][1-9][A-Za-z]{2};
    // if (){
    //   //If the postcode is valid, define the GET request
    //   // [A-Za-z][1-9] [1-9][A-Za-z]{2}
    // } else {
    //   //Otherwise, error handling
    // }
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input name="postcode" type="text" placeholder="Enter Postcode" value={this.state.postcode} onChange={this.handleInput}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default App

//Plan:
//Create a form that takes in the parameter of a postcode
//onSubmit the postcode from the form will be sent in a GET request to the given API endpoint
//Validate postcode with given Regex 
//If correct, process with HTTP request
//If incorrect, provide error handling
//Render the addresses for that postcode from the HTTP response 