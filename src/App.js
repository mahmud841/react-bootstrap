import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';


// const c = [];
// const number = c.length === 0 ? 5: 10;

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=76a0dd1b751043ca9370d2fe514cb5b8')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])

  return (
    <div className="App">
      {/* { news.length === 0 ? <span>Loading</span> : <span>done</span>} */}
       {
         news.length ===0 ? 
         <Spinner animation="border" />
         :
         <Row xs={1} md={3} className="g-4">
         {
           news.map(nw =><News news={nw}></News> )
         }
 
       </Row>
       }
      
    </div>
  );
}

export default App;
