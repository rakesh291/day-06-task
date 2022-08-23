class uber {
    constructor(distance,rate,time,waitingTime){
        this.distance = distance
        this.rate = rate
        this.time = time
        this.waitingTime = waitingTime


        if (this.time>13){
            this.rate = this.rate
        }
        else {
            this.rate= 60+ +this.rate}
    }
getRideDetails()
{return(`the distance of the ride is 
${this.distance}km and rate of ${this.rate} with waiting period ${this.waitingTime}mins `)};
getPrice(){
    return ((this.rate * this.distance ) + (this.waitingTime * 5)
    )
}
}

let customer1 = new uber ("10", "100",11,"10")
let customer2 = new uber ("5", "50",10,"10")
console.log (customer1.getPrice())