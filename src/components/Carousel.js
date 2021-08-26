import React from 'react';
const carouselText = 'd-flex h-100 flex-column text-center align-items-center justify-content-center';

const Carousel = () =>{
   
    return(
        <div>
          <div
            id="carouselExampleDark"
            class="carousel shadow-sm carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            
            <div class="carousel-inner">
              <div
                class="carousel-item img-fluid active"
                data-bs-interval="10000"
                style={{
                  backgroundImage:
                    "url('https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: '100vh'
                }}               
              >
                 <div className= {carouselText} >
                 <h5>First slide label</h5> <br />
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                 </div>
              </div>
              <div
                class="carousel-item "
                data-bs-interval="2000"
                style={{
                  backgroundImage:
                    "url('https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: 'center',
                  height: '100vh'
                }}
              >
                 <div className= {carouselText} >
                 <h5>Second slide label</h5><br />
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                 </div>
              </div>
              <div
                class="carousel-item img-fluid"
                style={{
                  backgroundImage:
                    "url('https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: '100vh'
                }}
              >
                 <div className= {carouselText}>
                 <h5>Third slide label</h5><br />
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                 </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    )
}
export default Carousel