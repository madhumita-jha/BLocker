import {useState} from 'react';
import {Navigate} from 'react-router-dom';
const Koibhi = () => {
    // const navigate = Navigate();
    const [isautheticated,setisauthenticated] = useState(false);
   
        const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectWallet = () => {
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'}).then(result =>{
                accountChanged([result[0]])
                setisauthenticated (true)
            })
        }
        else{
            setErrorMessage("Install MetaMask");
        }
    }
    const accountChanged = (accountName) => {
        setDefaultAccount(accountName)
    }
    return(
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            {
                isautheticated && <Navigate to = "/MediaPage"/>
            }
        </div> 
    )
} 
export default Koibhi; 