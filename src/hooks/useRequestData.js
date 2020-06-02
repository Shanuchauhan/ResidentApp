import { useState, useEffect ,useContext} from 'react';
import http_get from '../components/http_get'
import AppContext from '../context/AppContext'

export default function() {
    const {address,setAddress} = useContext(AppContext)
    const [result, setResult] = useState([]);
    
    const searchVehicle = function(){

        fetch("http://315d4a34bc05.ngrok.io/guest")
        .then(function(res){return res.json()})
        .then(function(results){
            setResult(results.filter(result => result.address === address));
        }).catch(err=>{
            console.log(err)
        })
    }
    
    useEffect(() => {
        searchVehicle();
    }, []);

    return [searchVehicle, result];
};
