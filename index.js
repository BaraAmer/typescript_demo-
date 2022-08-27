var usename = "Baraa";
var theage = 25;
var addre = ['tulkaerm', 'westbank', 'palestine'];
var univesity;
var testarray = [["baraa", "ahmad"], false, true];
var baraa = function test(nameuser, age, add, uni) {
    console.log("usename is : " + nameuser);
    console.log(" the age is :" + age);
    console.log("the addressess are : " + add);
    console.log("Are you study" + uni);
};
baraa(usename, theage, addre);
console.log("Array contain : ");
for (var i = 0; i < testarray.length; i++) {
    var element = testarray[i];
    console.log(element);
}
