import React from "react";

export default function Photos(props) {
    

  if (props.photos) {
      return (
          <div className="row">
              <h4>photos</h4>
              {props.photos.map(function(photo, index) {
                  return (  
                      <div className="col-sm-4 col-md-4 col-lg-4 text-center mb-4" key={index}>
                      <a href={photo.src.original} target="_blank" rel="noreferrer"><img className="rounded img-fluid" src={photo.src.tiny} alt=""  /></a>
                      </div>                 
                      
                  )
              })}
          </div>
      )
  } else {
      return null;
  }
        
    
    
}