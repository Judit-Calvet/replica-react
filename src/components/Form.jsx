import React from 'react'
import ButtonJoin from './ButtonJoin'

function Form() {
    return (
        <div className='form'>
            <form>
                <div class='mb-3'>
                    <label for='exampleInputName1' class='form-label'>Name</label>
                    <input type='name' class='form-control' id='exempleInputName1' aria-describeby='nameHelp' required />
                </div>
                <div class='mb-3'>
                    <label for='exempleInputEmail1' class='form-control' id='exempleInputEmail1' aria-describeby='emailHelp' required />
                </div>
                <div class='mb-4'>
                    <label for='exampleInputPassword1' class='form-label'>Password</label>
                    <input type='password' class='form-control' id='exampleInputPassword1' required />
                </div>
                <button type='submit' class='btn btn-primary'>Join Now</button>
            </form>
        </div>
    )
}

export default Form
