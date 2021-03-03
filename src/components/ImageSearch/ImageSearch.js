import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

// import api from '../../api/ApiSearchImage';
import * as api from '../../api/ApiSearchImage';

import Button from './Button/Button';
// import Modal from './Modal/Modal'

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

// ///////// Скрол не подключен!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class ImageSearch extends Component {
  state = {
    collection: [],
    search: '',
    currentPage: 1,
    error: null,
    loader: false,
  };

  // --------------------------------------------> Ф-я запуска поиска после обновления search в State:
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      console.log('Ф-я загрузки(№1)');
      this.fnGetCollection();
    }

    if (
      prevState.currentPage !== this.state.currentPage &&
      prevState.search === this.state.search
    ) {
      console.log('Ф-я Дозагрузки(№2)');
      this.fnGetCollection();
    }
  }

  // --------------------------------------------> Ф-я запроса на бэкенд
  fnGetCollection = () => {
    console.log('Go to backend');
    this.setState({
      loader: true,                                         //---> Включили Spiner
    });
    api
      .getImage(this.state.currentPage, this.state.search)
      .then(data => {
        this.setState({
          loader: false,                                   //---> Выключили Spiner
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
      currentPage: 1,                                     //---> Сбросили для дозагрузки
      error: null,                                        //---> Сбросили для дозагрузки
      collection: [],                                     //---> Сбросили для дозагрузки
    });
  };

  // --------------------------------------------> Ф-я дозагрузки фотографий
  fnLoadMore = () => {
    console.log(`Load More "${this.state.search}"`);
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    return (
      <div>
        {/* ----------------------------Searchbar------------------------------- */}
        <Searchbar fnSearch={this.fnSearch} />
        {/* ----------------------------ImageGallery------------------------------- */}
        {this.state.collection.length > 0 && (
          <ImageGallery
            collection={this.state.collection}
            fnLoadMore={this.fnLoadMore}
          />
        )}
        {/* ----------------------------Loader-1------------------------------- */}
        {this.state.loader && this.state.collection.length === 0 ? (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={150}
            width={150}
            style={{
              marginLeft: '50%',
              transform: 'translate(-50px)',
              marginTop: '15%',
            }}
            // timeout={3000} //3 secs
          />
        ) : null}
        {/* ----------------------------Loader-2------------------------------- */}
        {this.state.loader && this.state.collection.length > 0 ? (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            style={{
              marginLeft: '50%',
              transform: 'translate(-50px)',
              marginTop: '2%',
            }}
            // timeout={3000} //3 secs
          />
            ) : null}
        {/* ----------------------------Button------------------------------- */}
        {this.state.collection.length > 0 && (
          <Button fnLoadMore={this.fnLoadMore} />
        )}

        {/* <Modal/> */}
      </div>
    );
  }
}

export default ImageSearch;
