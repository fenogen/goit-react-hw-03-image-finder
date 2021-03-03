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
  };

  componentDidMount() {
    api
      .getImage(this.state.currentPage, this.state.search)
      .then(data => {
        this.setState({
          collection: data,
        });
        console.log(data);
      })
      .catch(() => console.warn('Server communication error'));
  }

  render() {
    return (
      <div>
        <Searchbar />
            {this.state.collection.length > 0 && <ImageGallery
                collection={this.state.collection}/>}
        {/* <Modal/> */}
      </div>
    );
  }
}

export default ImageSearch;
