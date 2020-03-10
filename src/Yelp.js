import axios from 'axios';

export default axios.create({
 baseURL: 'https://api.yelp.com/v3/businesses',
 headers: {
     Authorization: 
     'Bearer DHt59ukP_st-SdWczDEnCNy0-XJWteljSIayySk_iIHRCwxkY7SeKwXNRxRCmhNa1pDjwH_QR7PM_II76Txr7eAdQzzwTK_Kyk3vLho6bVUQPzHxV_fFFvkdpSRQXnYx'
 }
});