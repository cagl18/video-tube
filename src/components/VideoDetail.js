import React from 'react';

const videoDetail = ({ video }) => {
  if (video === null) {
    return 'Loading';
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe
          title='video player'
          width='560'
          height='315'
          src={videoSrc}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>

      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p className='description'>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default videoDetail;
