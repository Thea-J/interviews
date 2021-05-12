import React, { Component } from 'react'

import PostcodeForm from './PostcodeForm'



class App extends Component {

state = {

}

  

  render() {
    return (
      <div>
        <PostcodeForm />
      </div>
    )
  }
}

export default App

//Plan:
//Create a form that takes in the parameter of a postcode ✅
//onSubmit the postcode from the form will be sent in a GET request to the given API endpoint ✅
//Validate postcode with given Regex 
//If correct, process with HTTP request
//If incorrect, provide error handling
//Render the addresses for that postcode from the HTTP response 

//Improvements
// Separate Components for the form & address rendering ... & api ?
// Jest tests
// Privacy: encrypt postcodes & auth key 