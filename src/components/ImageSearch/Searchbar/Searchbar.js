import React from 'react';
import style from './Searchbar.module.css';

function Searchbar() {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm}>
        <button type="submit" className={style.SearchForm__button}>
          <span className={style.SearchForm__button_label}>Search</span>
        </button>

        <input
          className={style.SearchForm__input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
