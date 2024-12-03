import React from 'react'
import { Link } from 'react-router-dom'


function Blog() {
    return (
        <div>
            <div className='musicnav bg-dark' >
                <ul class="nav ">
                    <li class="nav-item">
                        <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light " to="https://www.forbes.com/sites/hughmcintyre/2024/09/25/can-lady-gaga-hit-no-1-with-her-surprise-joker-folie--deux-album/">News</Link>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-light" href="#">Video</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-light" href="#">Treding</a>
                    </li>

                </ul>
            </div >
            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
            <span>Sep 23, 2024</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg>
<span>Anu Harris</span>
<h1>The Ultimate Guide to Indie Music:<br></br> Definition, History, and Examples</h1>
<img src="https://neonmusic.co.uk/_image?href=https%3A%2F%2Fneonmusic.online%2Fwp-content%2Fuploads%2F2023%2F04%2Fguitar-5073850_1280.jpg&w=900&h=506&f=webp" class="card-img-top" alt="music1"></img>

<h2>Indie Music: It’s Complicated (But Not That Complicated)</h2>
<p>Indie music is like trying to define cool—impossible, yet we all know it when we hear it.

You’ve probably heard someone say, “This band was way better before they went mainstream,” but what actually makes something indie? It’s not just an underground gig in a sweaty basement.

While “indie” technically stands for “independent,” the reality is a bit more chaotic, like trying to explain why everyone suddenly loves vinyl again.

The world of indie music is complex, messy, and wonderfully unique—much like the artists that define it.g</p>
            </div>
        </div>
    )
}

export default Blog