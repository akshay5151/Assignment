import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hotels from './Info';
import './Hotel.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

function Hotel() {
  return (
    <>
      <h1 className='h1'><b> OUR <span style={{ color: 'red' }}>HOTELS</span></b></h1>
      <div className='col-lg-12'>
        <div className='col-lg-8 offset-2' style={{ paddingtop: '51px' }}>
          <div className="container my-3" >
            <Carousel
              showDots={true}
              responsive={responsive}
              infinite={true}
              swipeable={false}
              autoPlay
              autoPlaySpeed={50000}
            >
              {hotels.map(hotel => {
                return (
                  <div className="card my-5" style={{ width: '400px' }}>
                    <img src={hotel.image} className="card-img-top" alt={hotel.name} />
                    <div className="card-body">
                      <h5 className="card-title"><b style={{color:'black'}}>{hotel.name}</b></h5>
                      <p className="card-text">{hotel.description}</p>
                    </div>
                    <div className="card-body">
                      <form action={hotel.url}>
                        <div class="text-center">
                          <button className="gfg btn btn-primary" type="submit">
                            More
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hotel