
var usename: string = "Baraa";
var theage: number = 25;
var addre: string[] = ['tulkaerm','westbank','palestine'];
var univesity: (string | boolean) ;

var testarray: (string[] | boolean) []= [["baraa","ahmad"],false,true];

var baraa = function test(nameuser,age,add,uni?) :void {
    console.log("usename is : "+ nameuser);
    console.log(" the age is :"+ age);
    console.log("the addressess are : "+ add);
    console.log("Are you study"+uni);
  
}

baraa(usename,theage,addre);

console.log("Array contain : ")
for (let i = 0; i < testarray.length; i++) {
    const element = testarray[i];
    //console.log(element.repaet(3))
    console.log(element)
    
}

