import React from "react";

function Detail_iframe({ embed_link, description }: any) {
  return (
    <iframe
      className="float-left mr-3 mb-3 cursor-pointer"
      width="150"
      height="150"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
      src={embed_link}
    >
      {description}
    </iframe>
  );
}

export default Detail_iframe;
