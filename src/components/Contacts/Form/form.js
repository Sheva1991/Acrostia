import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from './FormControls/FormControls';
import { Input } from './FormControls/FormControls';
import './form-module.scss'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength30 = maxLength(30)
const maxLength150 = maxLength(150)
export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
export const minLength10 = minLength(10)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
const aol = value =>
    value && /.+@aol\.com/.test(value)
        ? 'Really? You still use AOL for your email?'
        : undefined
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined

const Form = (props) => {
    const { handleSubmit, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="row mt-4">
                <div className="col-lg-6">
                    <Field component={Input} name="Name" placeholder='Name' validate={[required, minLength2, maxLength30]} warn={alphaNumeric} />
                </div>
                <div className="col-lg-6">
                    <Field placeholder={'Email'} name={'email'} component={Input} validate={[required, email, maxLength30]} warn={aol} />
                </div>
                <div className="col-lg-12">
                    <Field component={Textarea} name="Question" placeholder='Your qeustion' validate={[required, minLength10, maxLength150]} />
                </div>
            </div>


            <div className='d-flex justify-content-center'>
                <button className='btn btn-danger btn-submit' type="submit" disabled={submitting}>Send</button>
            </div>
        </form>
    )
}

const ReduxForm = reduxForm({
    // a unique name for the form
    form: 'form'
})(Form)

export default ReduxForm;