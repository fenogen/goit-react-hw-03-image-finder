import React, { Component } from 'react';
import axios from 'axios';

import api from '../../api/ApiSearchImage';
// import PropTypes from 'prop-types'
// import Button from './Button/Button'
// import Modal from './Modal/Modal'

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class ImageSearch extends Component {
  state = {
    collection: [],
    search: '',
    currentPage: 1,
    error: null,
  };

  // --------------------------------------------> Ф-я запуска поиска после обновления search в State:
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      console.log('Ф-я загрузки(№1)');
      this.fnGetCollection();
      return;                                               //---> Без return код будет идти дальше и сработает Ф-я второй загрузки если дозагрузить контент и начать новый поиск!!!
    }

    if (prevState.currentPage !== this.state.currentPage) {
      console.log('Ф-я Дозагрузки(№2)');
        this.fnGetCollection();
        return;
    }
  }

  // --------------------------------------------> Ф-я запроса на бэкенд
    fnGetCollection = () => {
      console.log('Go to backend');
    api
      .getImage(this.state.currentPage, this.state.search)
      .then(data => {
        this.setState({
          collection: [...this.state.collection, ...data], //---> Распыляем что бы на экране было больше 12 фото после дозагрузки
        });
        console.log(this.state.collection);
      })
      .catch(() => console.warn('Server communication error'));
  };

  // --------------------------------------------> Ф-я извлечения значения инпута и запись его в State
  fnSearch = inputValue => {
    console.log(`I am ready for search "${inputValue}"`);
    this.setState({
      search: inputValue,
      currentPage: 1,            //---> Сбросили для дозагрузки
      error: null,               //---> Сбросили для дозагрузки
      collection: [],            //---> Сбросили для дозагрузки
    });
  };

  fnLoadMore = () => {
    console.log(`Load More "${this.state.search}"`);
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar fnSearch={this.fnSearch} />
        {this.state.collection.length > 0 && (
          <ImageGallery
            collection={this.state.collection}
            fnLoadMore={this.fnLoadMore}
          />
        )}
        {/* <Modal/> */}
      </div>
    );
  }
}

export default ImageSearch;
