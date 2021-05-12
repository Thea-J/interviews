import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: "https://6kb2p9kgb0.execute-api.eu-west-2.amazonaws.com/",
  headers: {"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExOCIsImNvbnN1bWVyTmFtZSI6IkludGVydmlld3MiLCJjb25zdW1lclR5cGUiOiIxIiwibmJmIjoxNjIwMzk5NDM3LCJleHAiOjE5MzU5MzIyMzcsImlhdCI6MTYyMDM5OTQzN30.m5Kfn9sQToLnF8mh57GLQYrJnrCQyC0reRuOgT9xv0M"}
})

export class PostcodeForm extends Component {
    //Postcodes: E5 8TE, E8 2LN, E8 1HH, E8 2HH

    state = {
        postcode: "",
        hasValidationError: false,
        hasApiError: false,
        apiErrorMessage: "",
        addressArray: []
    }

    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        let givenPostcode = this.state.postcode;
        // this.validatePostcode(givenPostcode)

        api.get(`production/api/v1/addresses/?postcode=${givenPostcode}`)
        .catch((error) => {this.handleApiError(error.message)})
    }

    handleApiError = (message) => {
        this.setState({hasApiError: true})
        this.setState({apiErrorMessage: message})
    }

    // validatePostcode = (postcode) => {
    //     let regex = '[A-Za-z][1-9][1-9][A-Za-z]{2}';
    //     if (){
    //       //If the postcode is valid, define the GET request
    //       // [A-Za-z][1-9] [1-9][A-Za-z]{2}
    //     } else {
    //         this.setState({hasValidationError: true})
    //     }
    // }

    renderErrorMessage = () => {
        if (this.state.hasApiError){
            return <h2> {this.state.apiErrorMessage} - Please Try Again </h2>
        } 
        else if (this.state.hasValidationError) {
            return <h2> The Postcode You Entered Invalid - Please Try Again </h2> 
        }
    }

    render() {
        return (
            <div>
                {this.renderErrorMessage()}
                <form onSubmit = {this.handleSubmit}>
                    <label> Enter Postcode: </label>
                    <input name="postcode" type="text" placeholder="Enter Postcode" value={this.state.postcode} onChange={this.handleInputChange}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default PostcodeForm
