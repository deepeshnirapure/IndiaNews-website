import React from "react";

const NewsItems = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card my-1"> 
        <span className="position-absolute  translate-middle badge rounded-pill bg-dark " style={{left:"90%", zIndex:"1", top:"6px"}}>{source}</span>
          <img src={!imageUrl ? "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg": imageUrl}
            className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}..</p>
            <p className="card-text text-success">
              <strong>
                By {author} On {new Date(date).toGMTString()}
              </strong>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
