import * as axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';


//#region category
export async function getCategoryByID(id, success, err){
    return axios.get('/category/'+id).then(function(response){
        success(response.data);
    }).catch(function (error){
        err(error);
    });
}
export async function getCategoryByParent(id, success, err){
    return axios.get('/category/list/all/'+id).then(function(response){
        success(response.data);
    }).catch(function (error){
        err(error);
    });
}

//#endregion


//#region ads

//#endregion

//#region images
export async function getImageByUID(uid, uid2, success, err){
    return axios.get("/adsimage/uid/"+uid+"/"+uid2).then(function(response){
        success(response.data);
    }).catch(function (error){
        err(error);
    });
}
export async function newImage(param, success, err){
    return axios.post('/adsimage/new', param).then(function(response){
        success(response.data);
    }).catch(function (error){
        err(error);
    });
}
//#endregion

