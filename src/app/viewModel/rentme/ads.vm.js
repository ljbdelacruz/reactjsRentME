class AdsVM{
    constructor(){
    }
    stringify(){
        return JSON.stringify(this);
    }
    toParam(id, price, type, images, title){
        this.id=id;
        this.price=price;
        this.type=type;
        this.images=images;
        this.title=title;
        this.description=this.description;
    }
    toParam2(id, title, description, price, currencyCode, ownerID, categoryID, priority, longitude, latitude, unitIdentifier, rentedByUserID, rentedAt, returnDate, available){
        this.id=id;
        this.title=title;
        this.description=description;
        this.price=price;
        this.currencyCode=currencyCode;
        this.ownerID=ownerID;
        this.categoryID=categoryID;
        this.priority=priority;
        this.longitude=longitude;
        this.latitude=latitude;
        this.unitIdentifier=unitIdentifier;
        this.rentedByUserID=rentedByUserID
        this.rentedAt=rentedAt;
        this.returnDate=returnDate
        this.available=available;
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

