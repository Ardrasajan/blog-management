import React from 'react'
import "../Assets/Style/Homepage.css"

function Homepage() {
    return (
        <div className='main'>
            <div className='Header '>
                <nav class="navbar navbar-expand-lg bg-body-dark header_main">
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
                                    <a class="nav-link active text-light" aria-current="page" href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form class="d-flex input-form-search" role="search">
                        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </nav>





            </div>
            <div className='body w-100 row '>
                <div className='col-6'>

                    <h1 className='theway'> “The way to get started is to quit talking and begin doing.” </h1><span>-Walt Disney</span>
                </div>

            </div>
            <div className='card container text-center maincard '>
                <div class="row align-items-start cardimage ">
                    <div class="card bg-light " style={{ width: '20rem' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GfV6D-BXPrpx87cY7v8of38yPQ8CZAROEA&s " class="card-img-top" alt="music" />
                        <div class="card-body text-dark ">
                            <h4 class="card-title">“Where words fail, music speaks.” </h4>
                            <p class="card-text">— Hans Christian Andersen</p>
                            <a href="#" class="btn btn-success">Read more</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: '20rem' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrDjwljz6xi5iXmnDVSpR5e3jyGTRIEZ7Ql8XvtktCsRI7lYTsqN7zw0WCV_-ZrP1dcg&usqp=CAU" class="card-img-top" alt="book" />
                        <div class="card-body">
                            <h4 class="card-title">“Only the very weak-minded refuse to be ...”</h4>
                            <p class="card-text">― Cassandra Clare, Clockwork Angel</p>
                            <a href="Blog" class="btn btn-success">Read more</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: '18rem' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQA2t-P52vMz1bqD1GDbJWxfYbJrUBAZAung&s" class="card-img-top" alt="sports" />
                        <div class="card-body">
                            <h4 class="card-title">"True disputants are like true..."</h4>
                            <p class="card-text">- Alexander Pope</p>
                            <a href="#" class="btn btn-success">Read more</a>
                        </div>
                    </div>
                    <br ></br >
                    <div class="card food" style={{ width: '20rem' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztDhwKB4Aarve2naMOXnhjxb12GEXX0VrVQ&s" class="card-img-top" alt="food" />
                        <div class="card-body">
                            <h4 class="card-title">"Let food be thy medicine ..."</h4>
                            <p class="card-text"> - Hippocrates</p>
                            <a href="#" class="btn btn-success">Read more</a>
                        </div>
                    </div>
                    
                    

                    <div class="card" style={{ width: '18rem' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAU3e5xiEUmtCmtK48BMmOPEI1rzKgg7uDqQ&s" class="card-img-top" alt="tec" />
                        <div class="card-body">
                            <h4 class="card-title">Any sufficiently advanced technology is equivalent to magic.</h4>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-success">Read more</a>
                        </div>
                    </div>
                    <div class="card yoga" style={{ width: '18rem' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRz3DOQOuUeRuG4S19BtWVIakLza3KrUt4M8Dy4FDWiBlfJbJNzPQaMvlsCORt-bRYoDo&usqp=CAU" class="card-img-end" alt="yoga" />
                        <div class="card-body">
                            <h4 class="card-title">“The yoga pose you avoid the most you need the most.” </h4>
                            <p class="card-text">- B.K.S. Iyengar</p>
                            <a href="Blog" class="btn btn-success">Read more</a>
                        </div>
                    </div>





                </div>


            </div>
            <div className='footer bg-dark text-light'>ngland: Mr John Smith,<br></br> 132, My Street,<br></br> Bigtown BG23 4YZ 
            </div>
        </div>
    )
}

export default Homepage