import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './App.module.css';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './api/api';
import Section from './components/Section/Section';
import FilterSection from './components/FilterSection/FilterSection';

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const generateSongsData = (value) => {
    const songData = newAlbumSongs[0]?.songs || [];

    const genreMap = { 1: 'rock', 2: 'pop', 3: 'jazz', 4: 'blues' };
    const key = genreMap[value];

    const data = key ? songData.filter((item) => item.genre.key === key) : songData;
    setFilteredDataValues(data);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    generateSongsData(newValue);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const generateTopAlbumSongs = async () => {
    try {
      const topAlbums = await fetchTopAlbums();
      setTopAlbumSongs(topAlbums);
    } catch (error) {
      console.error('Error fetching top albums:', error);
    }
  };

  const generateNewAlbumSongs = async () => {
    try {
      const newAlbums = await fetchNewAlbums();
      setNewAlbumSongs(newAlbums);
    } catch (error) {
      console.error('Error fetching new albums:', error);
    }
  };

  const generateFilterSongs = async () => {
    try {
      const songs = await fetchSongs();
      setFilteredDataValues(songs);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
    generateFilterSongs();
  }, []);

  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumSongs} />
        <Section type="album" title="New Albums" data={newAlbumSongs} />
        <FilterSection
          data={newAlbumSongs}
          type="songFilter"
          title="Songs"
          filteredData={generateSongsData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </div>
    </>
  );
}

export default App;
