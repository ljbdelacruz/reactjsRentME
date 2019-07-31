class CategoryVM{
    constructor(){
    }
    stringify(){
        return JSON.stringify(this);
    }
    toParam(id, value, placement, label){
        this.id=id;
        this.value=value;
        this.placement=placement;
        this.label=label;
    }
}
module.exports=CategoryVM;

