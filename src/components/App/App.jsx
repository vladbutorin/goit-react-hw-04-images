import React, { useState, useEffect } from 'react';
import * as API from '../../services/PixabayApi';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Wrap } from './App.styled';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const addImages = async () => {
      try {
        setIsLoading(true);
        const data = await API.getImages(searchName, currentPage);
        if (data.hits.length === 0) {
          toast.info('Sorry image not found..', {
            position: toast.POSITION.TOP_RIGHT,
          });
          return;
        }
        const normalizedImages = API.normalizedImages(data.hits);
        setImages(prevImages => [...prevImages, ...normalizedImages]);
        setIsLoading(false);
        setTotalPages(Math.ceil(data.totalHits / 12));
      } catch {
        setIsLoading(false);
        toast.error('Something went wrong!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    };

    if (searchName && (currentPage === 1 || searchName !== '')) {
      addImages();
    }
  }, [searchName, currentPage]);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleSubmit = query => {
    if (searchName.toLowerCase() === query.toLowerCase()) {
      return;
    }
    setSearchName(query);
    setImages([]);
    setCurrentPage(1);
  };

  return (
    <Wrap>
      <ToastContainer transition={Slide} />
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 ? (
        <ImageGallery images={images} />
      ) : (
        <p style={{ padding: 100, textAlign: 'center', fontSize: 30 }}>
          Image gallery is empty...
        </p>
      )}
      {isLoading && <Loader />}
      {images.length > 0 && totalPages !== currentPage && !isLoading && (
        <Button onClick={loadMore} />
      )}
    </Wrap>
  );
};

export default App;