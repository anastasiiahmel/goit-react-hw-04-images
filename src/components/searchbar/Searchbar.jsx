import React, { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  SearchbarHeader
} from './Search.styled.js'

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onFormChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      Notify.warning('Please fill in the input field');
      return;
    }
    onSubmit(searchQuery);
    onFormReset();
  };

  const onFormReset = () => {
    setSearchQuery(''); // Просто установите значение в пустую строку
  };

  return (
    <SearchbarHeader>
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onFormChange}
            value={searchQuery}
          />
        </form>
      </header>
    </SearchbarHeader>
  );
}
