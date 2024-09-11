import React from 'react'
import "../Assets/Style/Homepage.css"

function Homepage() {
    return (
        <div className='main'>
            <div className='Header'>
                <nav class="navbar navbar-expand-lg bg-body-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand text-light" href="#"><span className='text'>Blog</span> Management</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="#">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn " type="submit">Search</button>
                    </form>

                </nav>





            </div>
            <div className='body'></div>
            <div className='footer'></div>
        </div>
    )
}

export default Homepage