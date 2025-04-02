const Stream: React.FC = () => {
  return (
    <>
      <video id="player" className="w-50% video-js vjs-default-skin" controls>
        <source
          src="http://127.0.0.1:7500/hls/pibble.m3u8"
          type="application/x-mpegURL"
        />
      </video>
    </>
  );
};

export default Stream;
