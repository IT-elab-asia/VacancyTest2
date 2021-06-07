import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Coin from './Coin'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns } from 'react-bootstrap';

function Home() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    var request = {
      params: {
        id: [1, 2, 3, 4, 5, 6]
      }
    }
    axios.get('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    }).catch(error => alert('Gde to oshibka epta'))
  }, []);
  
  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    
    coin.title.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text"> Our Latest Developments</h1>
        <form>
          <span>Filter</span>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      <div className="post">
        <CardColumns style={{padding: 50, textAlign: '-webkit-center'}}>
      {filteredCoins.map(coin =>{
        return(
          <Coin key={coin.id} title={coin.title} address={coin.address} type={coin.type} price={coin.price} />
        )
      })}
      </CardColumns>

      </div>
    </div>
  );
}

export default Home;
