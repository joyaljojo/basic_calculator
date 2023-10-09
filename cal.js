function darkmode1(){
    var element = document.querySelector(".calculator");
    element.classList.toggle(".dark-mode");
}
const calc = {
operators:['+', '-','X', '/', '='],
memory: [],
screenMemory: "",
i:0,
j:0,
key: function(numb){
    
    if(this.i==0){
        document.querySelector('.display').innerHTML =numb;   
    }
    else{
        document.querySelector('.display').innerHTML +=numb;
    }
    this.i+=1
    console.log(numb);
    
    this.screenMemory=this.screenMemory+numb
    console.log('Value of screenMemory:'+ this.screenMemory)
},
keyOperators: function(op){
    this.j+=1;
    console.log(typeof(op));
    console.log(op==0);
    if(op==1){
        document.querySelector('.display').innerHTML +="-";
    }
    if (op==2) {
        document.querySelector('.display').innerHTML +="*";
    } 
    if(op==3) {
        document.querySelector('.display').innerHTML +="/";
    }
    if(op==0) {
        document.querySelector('.display').innerHTML +="+";
    }
    
    this.memory.push(this.screenMemory)
    this.screenMemory =this.operators[op]
    this.memory.push(this.screenMemory);
    this.screenMemory=""
    console.log('screenMemory now:', this.screenMemory);
    console.log('Memory:', this.memory);
},
clear: function(){
    this.memory = [];
    this.screenMemory='';
    document.querySelector('.display').innerHTML =0;
},
result: function(){
    this.memory.push(this.screenMemory)
    console.log(this.memory)
    for(let i=0; i<=this.memory.length; i++){
        if ((this.memory[i])==(this.operators[0])){
            let result = Number(this.memory[i-1]) + Number(this.memory[i+1])
            document.querySelector('.display').innerHTML = result;
            this.screenMemory = result;
            if(this.memory.length==i+1){
            this.memory.push(this.operators[0])
            this.memory.push(result);}
            else{
                this.memory.push(result)
            }
            console.log("add"+this.memory);
            this.i=0;
            }
    
        else if (this.memory[i]==this.operators[2]){

            let result = Number(this.memory[i-1]) * Number(this.memory[i+1])
            document.querySelector('.display').innerHTML = result;
            this.screenMemory = result;
            this.memory.push(result);
            console.log("multiply"+this.memory);
            this.i=0;
            }
    else if ((this.memory[i])==(this.operators[3])){
        
            let result =parseFloat(Number(this.memory[i-1]) / Number(this.memory[i+1]).toFixed(2))
            document.querySelector('.display').innerHTML = result;
            this.screenMemory = result;
            this.memory.push(result);
            console.log("div"+this.memory);
            this.i=0;
            }
    else if (this.memory[i]==this.operators[1]){
            let result = Number(this.memory[i-1]) - Number(this.memory[i+1])
            document.querySelector('.display').innerHTML = result;
            this.screenMemory = result;
            this.memory.push(result);
            console.log("sub "+this.memory);
            this.i=0;
            }
        }
}
}  