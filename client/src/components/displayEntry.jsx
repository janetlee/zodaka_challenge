const DisplayEntry = ({tweet}) => {
  return (
    <div className="display-entry">
      {tweet}
    </div>
  );

};

export default DisplayEntry;


  // return (
  //   <div className="video-list-entry media">
  //     <div className="media-left media-middle">
  //       <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
  //     </div>
  //     <div className="media-body">
  //       <div className="video-list-entry-title" onClick={() => video.handleClick.call(this, video)}>{video.snippet.title}</div>
  //       <div className="video-list-entry-detail">{video.snippet.description}</div>
  //     </div>
  //   </div>
  // );