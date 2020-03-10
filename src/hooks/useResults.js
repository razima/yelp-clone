import React, {useState, useEffect} from 'react';
import Yelp from '../Yelp';


export default()=> {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage ] = useState('');
    const searchApi = async (searchTerm) => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san diego' 
                }
        
            });
            setResults(response.data.businesses)
        } catch(e){
            setErrorMessage('som wrong bro')
        }
    }
    useEffect(()=> {
        searchApi('pasta');
    }, []);
    
    return [searchApi, results, errorMessage];

};