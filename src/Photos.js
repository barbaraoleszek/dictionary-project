import React from "react";

export default function Photos(props) {
    

  if (props.photos) {
      console.log(props.photos);
      return (
          <div className="photo">
              {props.photos.map(function(photo, index) {
                  return (
                      <img className="rounded img-fluid mx-auto" src={photo.src.tiny} alt="" key="index"/>
                  )
              })}
          </div>
      )
  } else {
      return null;
  }
        
    
    
}