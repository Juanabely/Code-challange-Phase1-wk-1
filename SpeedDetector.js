function speedDetector(speed){
    const slimit = 70
    const overs = 5
    if (speed <= slimit){
        return 'OK'
    }
    else{
        const demerit = (speed - slimit)/overs
        if(demerit >12){
            return 'License suspended'
        }
        else {
            return 'points:' + demerit
        }
    }
}
console.log(speedDetector(170))