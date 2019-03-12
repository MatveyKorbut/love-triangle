/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count=0;  
  var triangles=0;
  for(var i=0;i<preferences.length;i++){ 
    var first=preferences[i];
    var second=preferences[first-1];
    var third=preferences[second-1];
    if(third==i+1){
      triangles++;
    }
    if (triangles==3){
      count++;
      triangles=0;
    }
  }
   return(count);
};
