import React from 'react'
import "../../Assets/Style/AdminViewblogs.css"
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
function AdminViewblogs() {
  return (
    <div className='Admin_viewblog_container'>
      <div className='Viewblog_title'>
        <h4>View Latest Blogs</h4></div>
      <div className='Admin_second_container'>
        <div className="card_container">
          <div className="container text-center">
            <div className="row rows">
              <div className="col">
                <div className="card cards" style={{ minWidth: '10rem', maxHeight: '21rem' }}>
                  <img src="https://images.healthshots.com/healthshots/en/uploads/2022/05/11184715/Yoga-for-weight-loss-1600x900.jpg" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Yoga for all</h5>
                    <p className="card-text">Yoga is the perfect opportunity to be curious about who you are..</p>
                    <Link to="#" className="btn btn-success">Read more..</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card cards" style={{ minWidth: '10rem', maxHeight: '21rem' }}>
                  <img src="https://www.asymptotejournal.com/blog/wp-content/uploads/2022/12/stories-of-the-true.png" className="card-img-top" alt="loading" />
                  <div className="card-body">
                    <h5 className="card-title">Writer B Jeyamohan</h5>
                    <p className="card-text">Jeyamohan is an Indian Tamil and Malayalam language writer...</p>
                    <Link to="/viewpost1" className="btn btn-success">Read more..</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card cards" style={{ minWidth: '10rem', maxHeight: '21rem' }}>
                  <img src="https://importanceoftechnology.net/wp-content/uploads/2020/10/Possible-Future-Technology-of-the-World.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Futuristic technology</h5>
                    <p className="card-text">Amazing Future Technology Ideas that can Change the Planet.</p>
                    <Link to="#" className="btn btn-success">Read more..</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <div className="row rows">
              <div className="col">
                <div className="card cards" style={{ minWidth: '10rem', maxHeight: '21rem' }}>
                  <img src="https://plus.unsplash.com/premium_photo-1682125816787-4db071ef2da8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291bCUyMG11c2ljfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Music for soul</h5>
                    <p className="card-text">Soul music is a popular music genre that originated in the African-American community.</p>
                    <Link to="#" className="btn btn-success">Read more..</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card cards" style={{ minWidth: '10rem', maxHeight: '21rem' }}>
                  <img src="https://nextvacay.com/wp-content/uploads/2022/07/KW-why-travel-is-important.jpg.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Travel alone</h5>
                    <p className="card-text">Travelling – it leaves you speechless, then turns you into a storyteller.</p>
                    <Link to="#" className="btn btn-success">Read more..</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card cards" style={{ minWidth: '10rem', maxHeight: '21rem' }}>
                  <img src="https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1702481237.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Best italian food receipes</h5>
                    <p className="card-text">Here are our 17 best Italian recipes that include Italian veg dishes.</p>
                    <Link to="#" className="btn btn-success">Read more..</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className='admin_view_search'>
          <div className='view_search'>

            <h4>Search Blog..</h4>
            <FaSearch className='icon' />
            <input type='text' placeholder='Type here..' id='inputtext' />
            <input type='button' value="search" id='find' />


          
          <div className='view_categories'>
            <h4>Categories</h4>
            <div class="list-group categorylist">
              <Link to="#" class="list-group-item list-group-item-action Linkview">Literature(1)</Link>

              <Link to="#" class="list-group-item list-group-item-action Linkview">Health and wellness(2)</Link>
              <Link to="#" class="list-group-item list-group-item-action Linkview">Music(4)</Link>
              <Link to="#" class="list-group-item list-group-item-action Linkview">Food(2)</Link>
              <Link to="#" class="list-group-item list-group-item-action Linkview">Sports(3)</Link>
              <Link to="#" class="list-group-item list-group-item-action Linkview">Technology(8)</Link>
              
            </div>


          </div>
          </div>


        </div>
      </div>
    </div>


  )
}

export default AdminViewblogs