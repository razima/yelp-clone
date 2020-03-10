import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
// import Yelp from '../Yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm ]= useState('');
    const [searchApi, results, errorMessage]= useResults();
    //bussiness or results
  
    const filterResultsByPrice = (price) => {
        //price = $, $$ , $$$
        return results.filter(results=> {
            return results.price === price;
        });
    };
return (
    <>
        <SearchBar 
            term={term} 
            onTermChange={setTerm }
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text style= {{marginLeft: 15}}>found results {results.length}</Text>
        <ScrollView>
            <ResultsList 
                results={filterResultsByPrice('$')}
                title="cost effective"
            />
            <ResultsList 
                results={filterResultsByPrice('$$')} 
                title="pricier"
            />
            <ResultsList
                results={filterResultsByPrice('$$$')} 
                title="big spendier"
            />
        </ScrollView>
    </>
);

}

const styles = StyleSheet.create({

});
export default SearchScreen;
