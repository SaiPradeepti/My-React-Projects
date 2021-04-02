import React, {useState,useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const url = 'https://api.quotable.io/random?tags=famous-quotes';

const App = () => {  
  AOS.init({
    offset: 300,
    delay: 200,
    duration: 600,
    mirror: false,
  });

  const [quote,setQuote] = useState('');
  const [author,setAuthor] = useState('');

  const checkForQuote = async () => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const {author,content} = jsonResponse;
    setQuote(content);
    setAuthor(author);
  }

  useEffect(() => {
    checkForQuote();
    document.querySelector('.tweet-quote img').classList.add('rotate');
  }, []);
  
  return (
    <div id="quote-box"  data-aos="flip-right" data-aos-easing="ease-in-sine" className='quote-box'>
      <section id="text" className='text'>
        <div className='text'>
          {quote}
        </div>
      </section>
      <section id="author" className='author'>
        -{author}
      </section>
      <button id="new-quote" className='new-quote' onClick={checkForQuote}>new quote</button>
      <a href={`https://twitter.com/intent/tweet?text="${quote}"  -${author}&hashtags=quotes`} target='_blank' id="tweet-quote" className='tweet-quote'>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1024px-Twitter_bird_logo_2012.svg.png" alt=""/>
      </a>
    </div>
  )
}

export default App

