import React from 'react'
import BusHeader from './BusHeader'

const HomeBus = () => {
    return (
        <div style={{backgroundColor: '#ffffcc'}}>
            <BusHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExampleCaptions" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://wallpapercave.com/wp/wp8969936.jpg" class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>KSRTC BUS</h5>
                                                <p>Journey Redefined</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://wallpapercave.com/wp/wp7570200.jpg" class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>KSRTC BUS</h5>
                                                <p>Journey Redefined</p>
                                            </div>
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card text-center">

                                    <div class="card-body">
                                        <h5 class="card-title">Want to know more about us?</h5>
                                        <p class="card-text">Kerala State Road Transport Corporation(KSRTC) is a state-owned road transport corporation in the Indian state of Kerala. It is one of the country's oldest state-run public bus transport services.</p>
                                        <a href="https://en.wikipedia.org/wiki/Kerala_State_Road_Transport_Corporation" class="btn btn-danger">click here</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBus