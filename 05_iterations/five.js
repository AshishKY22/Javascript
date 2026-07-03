const coding = ['js','java','py','cpp']

coding.forEach( function/*function array ke aandar chal rha*/ (item /*each values of the array :: parameter*/) {
    console.log(item);
    
}  )

coding.forEach( (item)=>{
    console.log(item);
    
} )

function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)//reference dedo function ka apne aap kar lega baaki kaam 

coding.forEach(  (item,index,arr)=>{
    console.log(item,index,arr); //js 0 [ 'js', 'java', 'py', 'cpp' ]
    
})  


//many objects declared together
const myCoding = [
    {
        languageName :'javaScript',
        languageFileName:'js'
    },
    {
        languageName :'java',
        languageFileName:'java'
    },
    {
        languageName :'python',
        languageFileName:'py'
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    
})








