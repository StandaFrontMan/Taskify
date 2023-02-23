import React from 'react'

const InputField = () => {
  return (
    <div>
        <form>
          <label>
            Name:
            <input type='text' name='name'/>
          </label>
          <input type='submit' name='Submit'/>
        </form>
    </div>
  )
}

export default InputField