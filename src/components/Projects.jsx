import React from 'react'
import '../styles/Projects.css';


export function Projects() {
  return (
    <div className='projects'>
        <h1 className='projects-heading'>Projects</h1>
        <h3 className='projects-subheading'>Following are the projects made from scratch using Reactjs and its libray.</h3>
        <h3 className='projects-subheading'>Full Stack MERN projects are comming soon which shall be based on Mongodb database, Express js for server and API, React js for frontend and Node js for backend.</h3>
        <div className="project">
            <div className="name">
                <h2 className='name-heading'>BookmyShow</h2>
                <p style={{color: 'blueviolet'}}><b>Features:</b></p>
                <p style={{textAlign: 'justify', color:'gray'}}>
                    An application based on the web for movie booking using the Movie Database (TMDB) API.
                    It allows users to filter the movie based on genre, showing currently playing movies for booking movie tickets.
                    Generating the API from the moviedb. Creating the landing page which has home tab, nav bar,  search features, and filtering the movie based on the genre available. A modal for movie description which has features of add to wishlist, and go to the booking ticket tab. User authentication and checkout page.
                </p>
                <ul className='techstack'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Reactjs</li>
                    <li>AntD</li>
                </ul>
                <div className="links">
                    <div className="netlify">
                        <a href="https://bookmyshow-clone-react-02-ns.netlify.app/">View Website</a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/CodewithAli45/BookMyShow-Clone---React-Project---wjofyfpvxv5y">View Code</a>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="bookmyshow.png" alt="bookmyshow" width={600} />
            </div>
        </div>
        <div className="project">
            <div className="name">
                <h2 className='name-heading'>Meesho Clone</h2>
                <p style={{color: 'blueviolet'}}><b>Features:</b></p>
                <p style={{textAlign: 'justify', color:'gray'}}>
                    A web-based application that emulates some of the functionality of the Meesho e-commerce platform.
                    It allows users to search for and browse products, add items to a shopping cart, and complete a checkout process.
                    Build the project with Create-React-App with the installation of dependencies such as react-router, AntD, Axios, etc. Implementation of Product Catalog and Product page which includes a search bar, fetching API . User login page, Cart page, and payment modal in which i have used useContext Hook, localStorage, etc.
                </p>
                <ul className='techstack'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Reactjs</li>
                    <li>AntD</li>
                </ul>
                <div className="links">
                    <div className="netlify">
                        <a href="https://meesho-clone-react-01.netlify.app/">View Website</a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/CodewithAli45/Meesho-Clone---React-Project---lnnl67aaxsnx">View Code</a>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="meesho.png" alt="" width={600}/>
            </div>
        </div>
    </div>
  )
}

