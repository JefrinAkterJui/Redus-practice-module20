const counter ={
    count : 0,
    increment(newCount){
        this.count += newCount
        // console.log(this.count)
    }
    
}
counter.increment(1)
counter.increment(2)
counter.increment(3)

const counter1 = (newcount1)=>{
    let count = 0;
    return count+newcount1
}
console.log(counter1(1))
console.log(counter1(2))
console.log(counter1(3))