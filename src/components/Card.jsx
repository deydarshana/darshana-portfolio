import React from 'react';
import {NavLink} from 'react-router-dom'; 


const Card = (props) => {
  return(
      <>
        
         
              
                 
                      <div className="col-md-4 col-10 mx-auto">
                      <div className="card" style={{height:'540px'}}>
  <img src={props.imgsrc} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <NavLink to="/" className="btn-get-started">Read More</NavLink>
  </div>
</div>
                      </div>
                  

              
          </>
     
  );
}

export default Card;