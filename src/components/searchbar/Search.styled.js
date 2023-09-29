import styled from 'styled-components';

export const SearchbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  .form {
    display: flex;
    align-items: center;
    width: 400px;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }
  .input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 15px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
  }
  .input::placeholder {
    font: inherit;
    font-size: 15px;
  }
  .button {
    display: inline-block;
    width: 100px;
    height: 40px;
    border: 0;
    /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    font-size: 10px;
  }
  .button:hover {
    opacity: 1;
  }
`;
