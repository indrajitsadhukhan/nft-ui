import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react'
import axios from 'axios'
/* TODO: 
1. Connect with Metamask Wallet.
2. Integrate API with Mint NFT button
*/

function App() {
  const [jsonResponse,setJsonResponse]=useState()
async function fetchAPI(apiUrl,apiMethod){
  await axios
  .post(apiUrl, 
    {
    headers: { 
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  },
  )
  .then((response) => {
    setJsonResponse(response.data)
  });
  }
  const mintNFT = async () => {
    // console.log("Mint NFT");
   await fetchAPI("http://localhost:3000/mint","POST")
  };
  const fetchNFT = async () => {
    console.log("Fetch NFTs");  
  };
  console.log(JSON.stringify(jsonResponse,null,"\t"));
  return (
    <div className="App">
      <div className="btn">
        <button type="button" className="btn btn-primary" onClick={mintNFT}>
          Mint NFT
        </button>
        <button type="button" className="btn btn-primary" onClick={fetchNFT}>
          Get all NFTs
        </button>
      </div>
     
      {/* <div>{JSON.stringify(jsonResponse,null,"\t")}</div> */}
       
      <ul className="list-group api-response">
  <li className="list-group-item">url: {jsonResponse.url}</li>
  <li className="list-group-item">blockNumber: {jsonResponse.blockNumber}</li>
  <li className="list-group-item">IPFS_hash: {jsonResponse.IPFS_hash}</li>
  <li className="list-group-item">message: {jsonResponse.message}</li>
</ul>

    </div> 
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
