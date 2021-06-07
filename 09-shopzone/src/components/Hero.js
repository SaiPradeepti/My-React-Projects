import React, { useState, useEffect } from 'react'

const Hero = () => {
    const [changeColor,setChangeColor] = useState(false);
    

    useEffect(()=>{
       setTimeout(()=>{
        setChangeColor(!changeColor);
       },4000);

        return () => {
            // clearTimeout(color); 
        }
    },[changeColor])

    return (
        <div className='hero'>
            <div className="hero__imgContainer">
                <div className={changeColor?"block hide":"block"}>
                    <img src="https://images.unsplash.com/photo-1556011299-650a931cbfae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hero-img" />
                </div>
                <div className={changeColor?"block":"block hide"}>
                    <img src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNob3B8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hero-img" />
                </div>
                <div className={changeColor?"block hide":"block"}>
                    <img src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hero-img" /></div>
                <div className={changeColor?"block":"block hide"}>
                    <img src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hero-img" />
                </div>
                <div className={changeColor?"block":"block hide"}>
                    <img src="https://images.unsplash.com/photo-1618183876181-3df5b83e7be9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNob3BwaW5nJTIwYmFnc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hero-img" />
                </div>
                <div className={changeColor?"block hide":"block"}>
                    <img src="https://images.unsplash.com/photo-1558191053-8edcb01e1da3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hero-img" /></div>
                <div className={changeColor?"block":"block hide"}>
                    <img src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="hero-img" />
                </div>
                <div className={changeColor?"block hide":"block"}>
                    <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="hero-img" /></div>                
            </div>
        </div>
    )
}

export default Hero
