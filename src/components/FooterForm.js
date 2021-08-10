import React from "react";
import styled from "styled-components";
import ReusableButton from "./ReusableButton";

const FooterForm = () => {
  return (
    <StyledFooterForm className='form-flex'>
      <div className='flex-left'>
        <p>
          We provide traffic management consultants so you get started quickly,
          contact us for a quote today!
        </p>
      </div>
      <div className='flex-right'>
        <form className='contact-form'>
          <div className='form-group'>
            <label htmlFor='name' className='label'>
              Name
            </label>
            <input type='text' name='name' id='name' placeholder='Your name' />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='label'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
            />
          </div>
          <div className='form-button'>
            <ReusableButton text={"get started"} icon longBtn />
          </div>
        </form>
      </div>
    </StyledFooterForm>
  );
};

const StyledFooterForm = styled.div`
  display: flex;
  justify-content: space-around;

  .flex-left {
    max-width: 50%;
    min-width: 50%;
    align-self: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    padding: 2rem;
    border-left: 10px solid #ed4d47;
    border-radius: 5px 0 0 5px;
  }
  .flex-right {
    position: relative;
    top: -5rem;
    max-width: 50%;
    min-width: 50%;
    box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);
    .contact-form {
      height: 440px;
      background: #ffffff;
      box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);

      border-radius: 10px;
      display: flex;
      flex-direction: column;
      width: 100%;

      label.label {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 40px;
        cursor: pointer;
      }

      .form-group {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: auto;

        input {
          background: #ffffff;
          border: 1px solid rgba(238, 77, 71, 0.5);
          height: 60px;
          box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.2);
          border-radius: 5px;
          padding: 0 2rem;
          font-family: Rubik;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 40px;
          color: #402b2b;
          width: 100%;

          &:focus {
            border: 2px solid #ee4d47;
            outline: 0;
          }

          &::placeholder {
            font-family: Rubik;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 40px;
            color: #402b2b;
          }
        }
      }

      .form-button {
        margin: auto;
        width: 80%;
      }
    }
  }
`;

export default FooterForm;
