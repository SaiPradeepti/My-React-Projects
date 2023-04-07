import React from 'react'
import vg from '../assets/2.webp'
import{
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <div className='home' id="home">
        <main>
            <h1>TechStar</h1>
            <p>Solution to all your problems</p>
        </main>
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim velit inventore quisquam, nostrum sapiente alias aspernatur voluptatum! Cumque debitis saepe suscipit blanditiis expedita, sit mollitia quaerat ab voluptatibus velit, incidunt tempore! Optio eligendi sint nemo voluptate dolor similique, ipsa quasi beatae quia ab deleniti dicta vel asperiores exercitationem recusandae tenetur error quod assumenda unde porro perspiciatis!
                </p>
            </div>
        </div>
        <div className="home3" id='about'>
            <div>
                <h1>Who we are</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus fugiat maiores sapiente, aperiam asperiores architecto odio necessitatibus, maxime aspernatur consectetur excepturi? Quidem, voluptas velit? Molestiae et fugit non dignissimos labore voluptas aut ex ad vero impedit, totam aperiam incidunt assumenda nihil placeat facilis est laboriosam fuga dolorem rerum velit?
                </p>
            </div>    
        </div>
        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: '0.3s'
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay: '0.5s'
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay: '0.7s'
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay: '0.9s'
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home