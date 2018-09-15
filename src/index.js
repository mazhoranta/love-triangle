/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var loveTrianglesCount = 0;
  var spicheneesCount = preferences.length;
  if (spicheneesCount >= 3) {
    for (var i = 0; i < spicheneesCount; i++) {
      var firstSpichenee = preferences[i];
      
      if (firstSpichenee <= spicheneesCount) {
        var secondSpichenee = preferences[firstSpichenee - 1];

        if (secondSpichenee <= spicheneesCount && secondSpichenee != firstSpichenee) {
          var thirdSpichenee = preferences[secondSpichenee - 1];

          if ((thirdSpichenee - 1) == i && thirdSpichenee != secondSpichenee)
            loveTrianglesCount++;
        }
      }
    }
  }

  return loveTrianglesCount / 3;
};
