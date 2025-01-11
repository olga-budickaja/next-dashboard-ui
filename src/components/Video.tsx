const Video = ({ src }: { src: string }) => {
  return (
    <div className="">
      <iframe
        width="100%"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Video;
