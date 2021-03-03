import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import ImageGalleryItem from './ImageGallery/ImageGalleryItem'
import Button from './Button/Button'
import Modal from './Modal/Modal'




class ImageSearch extends Component {

    state = {}

    render() {
        return (
            <div>
                <Searchbar />
                <ImageGallery />
                {/* <ImageGalleryItem /> */}
                {/* <Button /> */}
                {/* <Modal/> */}
            </div>
        )
    }
}

export default ImageSearch
