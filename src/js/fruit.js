function Fruit(name, quantity, price) {
    var that = this;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.total = price*quantity;    
    

    this.add = function() {
        that.quantity++;
        that.total += price;
        setValues(that.name, that.quantity, that.total);        
    }

    this.subtract = function() {
        if(that.quantity > 0){
            that.quantity--;
            that.total -= price;
            setValues(that.name, that.quantity, that.total);
        }
    }
    
    this.empty = function() {
        that.quantity = 0;
        that.total = 0;
        setValues(that.name, that.quantity, that.total);
    }    
    
    setValues(that.name, that.quantity, that.total);
    setListeners(that.name, that.add, that.subtract);
}