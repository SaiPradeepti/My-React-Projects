import React from 'react'
import vg from '../assets/2.avif'

const Home = () => {
  return (
    <>
        <div className='home'>
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
    </>
  )
}

export default Home