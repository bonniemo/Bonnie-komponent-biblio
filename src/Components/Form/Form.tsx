import { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [buttonText, setButtonText] = useState("GET UPDATED");
  const [buttonColor, setButtonColor] = useState("red");
  const handleClick = () => {
    event?.preventDefault();
    if (buttonText === "GET UPDATED") {
      setButtonText("YOU ARE UPDATED ✓");
      setButtonColor("Green");
    } else {
      setButtonText("GET UPDATED");
      setButtonColor("red");
    }
  };
  return (
    <>
      <div className='Form-container'>
        <form action='' method='get' className='form-example'>
          <div className='form-example1'>
            <label htmlFor='name'></label>
            <input
              type='text'
              name='name'
              id='name'
              required
              placeholder='Full Name'
            />
          </div>
          <div className='form-example2'>
            <label htmlFor='email'> </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='you@example.com'
            />
          </div>

          <button
            className='Button'
            onClick={handleClick}
            style={{ backgroundColor: buttonColor }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
