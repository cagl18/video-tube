import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import youtubeAxios from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onSearchVideos('buildings');
  }

  onSearchVideos = async term => {
    const response = await youtubeAxios.get('/search', {
      params: { q: term }
    });
    const videos = response.data.items;
    this.setState({ videos: videos, selectedVideo: videos[0] });
    // console.log(response);
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchVideos}></SearchBar>
        {this.state.videos.length} videos
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
