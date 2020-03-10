import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Yelp from '../Yelp';

const ResultsShowScreen = ({navigation}) => {

  const [result, setResult] = useState(null);
  const id =  navigation.getParam('id');

  //when expecting the state value to be an object, we use null indicate that we do not have any data available 
 
  const getResult = async id => {
    try {
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);
        
    } catch(e){
        setErrorMessage('som wrong bro')
    }
} 

    useEffect(()=> {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return (
        <View  style={styles.container}>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => { 
                    return <Image style={styles.image} 
                                source={{ uri : item }}
                            />
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        height: 200,
        width: 300,
        marginBottom: 10
    }
});
export default ResultsShowScreen;