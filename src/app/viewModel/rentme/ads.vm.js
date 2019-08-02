class AdsVM{
    constructor(){
    }
    stringify(){
        return JSON.stringify(this);
    }
    toParam(id, label, price, type, images){
        this.id=id;
        this.price=price;
        this.type=type;
        this.images=images;
    }
}
class ImagesVM{
    constructor(){

    }
    stringify(){
        return JSON.stringify(this);
    }
    toParam(id, source){
        this.id=id;
        this.source=source;
    }
}


module.exports={AdsVM, ImagesVM};

