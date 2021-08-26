import React from 'react';

const Banner = () =>{
    return(
        <div className="container-fluid my-5">
          <div className="row shadow-sm">
            <div className="col-lg-7 col-sm-12">
              <img
                src="https://picsum.photos/1000/500"
                alt=""
                className="img-fluid rounded shadow "
              />
            </div>
            <div className="col-lg-5 col-sm-12 text-center">
              <div className="d-flex h-100 flex-column  align-items-center justify-content-center">
                <h1 className="display-1 w-100">React course</h1>
                <h3 className=" w-100 display-6">Happy learning</h3>
              </div>
            </div>
          </div>
        </div>
    );
}
export default Banner