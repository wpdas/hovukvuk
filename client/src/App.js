import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from './api';

import useInterval from './hooks/useInterval';
import Image from './components/Image';

function App() {
  const [images, setImages] = useState([]);
  const [randomImage, setRandomImage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      api.images().then((imageData) => {
        setImages(imageData?.data?.data);
      }).catch((error) => {
        console.error('There is error while loading Gifs from server!', error);
      })
    };
    fetchData();

    const audio = new Audio(api.songLink);
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);

    audio.play();
  }, []);

  useInterval(() => {
    setRandomImage(Math.round(Math.random() * images.length));
  }, 5300);

  const imagesContent = images.map((imageInfo, index) => {
    return (
      <Image key={index} src={imageInfo.url} width={imageInfo.width} height={imageInfo.height} alt="general" />
    )
  });

  return (
    <Container>
      {imagesContent[randomImage]}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
