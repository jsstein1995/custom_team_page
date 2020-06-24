var arr1= ["dog", "goose", "kite", "meal", "laptop"];
var arr2 = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];

var output = [];

function onlyReturnSameValue () {
   for (var i =0; i < arr1.length; i++) {
     for (var j = 0; j < arr2.length; j++) {
       if (arr1[i] == arr2[j]) {
         output.push(arr1[i])
       }
     }
   }
  console.log(output);
}
onlyReturnSameValue ();