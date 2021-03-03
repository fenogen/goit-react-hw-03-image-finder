import React, { Component } from 'react';
import style from './ImageGallery.module.css';

import ImageGalleryItem from './ImageGalleryItem';
import Button from '../Button/Button'

class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className={style.ImageGallery}>
                {this.props.collection.map(item => (
                    <ImageGalleryItem
                        key={item.id}
                        src={item.webformatURL}
                        srcLarge={item.largeImageURL}
                    />))}
        </ul>
        <Button
          fnLoadMore={this.props.fnLoadMore}/>
      </>
    );
  }
}

export default ImageGallery;
