(function(){
    let beerName = "Lech",
        beerPrice = 4;

    let beerData = {
        beerName,
        beerPrice,
        getFullPrice() {
            return "Full cost of one botlle of " + this.beerName + " " + this.beerPrice*1.23;
        }
    }
    console.log(beerData.getFullPrice());
}());