import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>

        <img src={imageUrl} Name="card-img-top" alt="..." />
        <div Name="card-body">
          <h5 Name="card-title">{title}...</h5>

          <p Name="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on Date
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className=" btn btn-sm btn-dark my-3 mx-3"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
