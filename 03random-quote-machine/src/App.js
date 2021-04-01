import React, {useState,useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const url = 'https://api.quotable.io/random?tags=famous-quotes';

const App = () => {

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
  AOS.init({duration:2000});
  AOS.refresh();
  }, []);


  
  // const tweetNow = 
  //  onClick={tweetNow}
  return (
    <div id="quote-box" className='quote-box'>
      <section id="text" className='text'>
        {/* <div data-aos="fade-up" data-aos-offset="600" className='text'> */}
        <div>
          {quote}
        </div>
      </section>
      <section id="author" className='author'>
        -{author}
      </section>
      <button id="new-quote" className='new-quote' onClick={checkForQuote}>new quote</button>
      <a href={`https://twitter.com/intent/tweet?text="${quote}"  -${author}&hashtags=quotes`} id="tweet-quote" className='tweet-quote'>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1024px-Twitter_bird_logo_2012.svg.png" alt=""/>
      </a>
    </div>
  )
}

export default App

