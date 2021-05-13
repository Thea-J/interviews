import { render, screen } from '@testing-library/react';
import PostcodeForm from './PostcodeForm'


// 1) Renders the form component onto the page 
// Render the PostcodeForm component 
// Use getByLabelText() query to find the form element on the page
// To use getByLabelText(), your form label must have htmlFor="" attribute that is the same as the form input's id="" attribute 
test('Renders the form', () => {
    render(<PostcodeForm />);
    const formElement = screen.getByLabelText('Enter Postcode:');
    expect(formElement).toBeInTheDocument();
})

// 2) Input value updates on change

//Tests:

// 3) On form submission, postcode validation is checked
// 4) fetched data is an array
// 5) Conditionally renders error messages for (api errors & validation errors)