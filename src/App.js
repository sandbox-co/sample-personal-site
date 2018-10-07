import React, { Component } from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import Gallery from 'react-photo-gallery';
import './App.css';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: white;
  border: 2px solid white;
`

const AppContainer = styled.div`
  text-align: center;
  color: white;
  background: #33C7FF; 
  height: 100%;
`
const Title = styled.div`
  color: white;
  font-size: 30px;
  font-family: Courier;
  padding: 4.2%;
  text-align: left; 
  border: 2px solid white; 
`
const Subtitle = styled.div`
  color: white;
  font-size: 14px;
  font-family: Trebuchet MS;
  text-align: left; 
`
const SectionHeader = styled.div`
  color: white;
  font-size: 18px;
  font-family: Trebuchet MS;
  text-align: left; 
  padding: 4%
  border-bottom: 2px solid white; 
`
const PHOTO_SET = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSQNwku_LuXixUnk1WtkLOJ5G7bX0oXg-9aSP_nM9BFSqFjZi',
    width: 4,
    height: 3
  },
  {
    src: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BTrHt7uCiu335hjs/videoblocks-aerial-view-on-paradise-tropical-island-beach-with-clear-blue-water-at-similan-island-hd-andaman-sea-thailand_h8xulnia9g_thumbnail-full01.png',
    width: 1,
    height: 1
  },
  {
    src: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2Fimage%2F2016%2F10%2Fmain%2Flanikai-beach-oahu-hawaii-517639994.jpg%3Fitok%3D4asX39xr&w=700&q=85',
    width: 1,
    height: 1
  },
  {
    src: 'https://wp-assets.futurism.com/2018/03/Maya_Bay_Thailand_by_Mike_Clegg_Photography.jpg',
    width: 1,
    height: 1
  }
];

class GalleryHeader extends React.Component {
    render() {
  return (
      <Gallery photos={PHOTO_SET} />
  );
    }
}

class App extends Component {
  render() {
    return (
     <AppContainer>
        <Title>Lea Sparkman
          <Subtitle>Yale Computer Science 2020</Subtitle>
        </Title>
        <GalleryHeader />
        <SectionHeader>Projects</SectionHeader>
        <SectionHeader>Articles</SectionHeader>
     </AppContainer>
    );
  }
}

export default App;

