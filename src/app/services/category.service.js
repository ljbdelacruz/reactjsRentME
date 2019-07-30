import * as axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

export async function getAds(id, success, err){
    return axios.getByCategoryID('/category/'+id).then(function(response){
        success(response.data);
    }).catch(function (error){
        err(error);
    });
}


