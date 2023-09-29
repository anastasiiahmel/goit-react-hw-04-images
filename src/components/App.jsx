import React, { useState, useEffect, useCallback } from "react";
import { dataQuery } from "api/api";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Searchbar } from "./searchbar/Searchbar";
import { ImageGallery } from "./imageGallery/ImageGallery";
import { Loader } from "./loader/Loader";
import { Button } from "./button/Button";
import { Modal } from "./modal/Modal";

export const App = () => {
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState('');
  const [previousSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [totalHits, setTotalHits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 

  const fetchImages = useCallback(async () => {
    setIsLoading(true);

    try {
      const articles = await dataQuery(searchQuery, page, perPage);

      setImages(prevImages => (
        page === 1 ? articles.hits : [...prevImages, ...articles.hits]
      ));
      setTotalHits(articles.totalHits);

      if (articles.hits.length > 0 && page === 1) {
        Notify.warning('We found your images!');
      } else if (articles.hits.length === 0) {
        throw new Error();
      }
    } catch (err) {
      Notify.warning('Sorry, there are no images matching your search query. Please try again.');
      console.log(err.message);
      setTotalHits(0);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, page, perPage]);

  useEffect(() => {
    if (page !== 1 || searchQuery !== '') {
      fetchImages();
    }
  }, [page, searchQuery, fetchImages]);

  const onFormSubmitData = (searchQuery) => {
    const trimmedQuery = searchQuery.toLowerCase().trim();
    if (trimmedQuery  === 
        previousSearchQuery.toLowerCase().trim()) {
      return Notify.warning(`You are already viewing ${searchQuery}`);
    }

    setSearchQuery(searchQuery.toLowerCase().trim());
    setPage(1);
    setImages([]);
  };

  const onLoadMoreData = () => {
    if (page * perPage < totalHits) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleImageClick = (largeImageURL) => {
    setLargeImageURL(largeImageURL);
  };

  const handleCloseModal = () => {
    setLargeImageURL('');
  };

  return (
    <>
      <Searchbar onSubmit={onFormSubmitData} />
      <ImageGallery articles={images} onClick={handleImageClick} />
      {isLoading && <Loader />}

      {totalHits > page * perPage && (
        <Button onClick={onLoadMoreData} />
      )}
      {largeImageURL && <Modal src={largeImageURL} alt="Large" onClose={handleCloseModal} />}
    </>
  );
}


