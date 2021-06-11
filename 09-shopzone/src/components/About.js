import React from 'react'
import { aboutData } from './data'
import AnimatedNumber from "react-animated-numbers"

const About = () => {
    return (
        <div className='about'>
            <div className="about__title">About Us</div>
            <div className="about__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste assumenda doloribus ea eveniet, sequi laborum corporis officiis aut tenetur accusamus, et labore esse recusandae error autem impedit quos quidem enim quas fugiat deserunt. Culpa sint reiciendis, ratione eaque praesentium harum consequuntur modi explicabo ipsum reprehenderit maxime placeat magni. Aliquid veritatis neque ipsum quas! Eum voluptatem explicabo quas ipsa distinctio. Placeat rerum fugit ipsa amet ratione debitis odio dignissimos, quidem pariatur fuga. Nisi asperiores eveniet, distinctio fugiat vero eius? Animi voluptatem rerum nulla recusandae quaerat autem iste, dolores odit. Qui dolorem unde officiis possimus nostrum architecto saepe sed sint ad enim?
            </div>
            <div className="about__info">
                {
                    aboutData.map(item => {
                        const {id,title,count,icon} = item;
                        return (
                            <section key={id} className='info__section'>
                                <div className="icon">{icon}</div>
                                <div className="title">{title}</div>
                                <div className="count">
                                    <AnimatedNumber
                                        fontStyle={{ fontFamily: "Nunito", fontSize: 30 }}
                                        animateToNumber={count}
                                        includeComma
                                        config={{ tension: 89, friction: 40 }}
                                        onStart={() => console.log("onStart")}
                                        onFinish={() => console.log("onFinish")}
                                        animationType={"random"}
                                    />+
                                </div>
                            </section>
                        )
                    })                
                }
            </div>
            <div className="about__map">
                <img src="/img/map1.bmp.png" alt="about-map" />
            </div>
        </div>
    )
}

export default About
