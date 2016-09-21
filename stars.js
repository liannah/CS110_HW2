   const spaces = function(n) {
      if (n === 0) {
        return " ";
    }
      return " " + spaces(n-1);
   };

   const stars = function (n) {
    if (n === 0) {
        return "";
    }
        return "*" + stars(n-1);
   };

   const triangelstars = function (n) {
      return runtriangel (n,1);
   };
 
   const runtriangel = function (n,k) {
    if (n === 1) {
        return spaces(n-1) + stars(k) + spaces(n-1) + "\n";
    }
      return spaces(n-1) + stars(k) + spaces(n-1) + "\n" + runtriangel(n - 1, k + 2);
   };
  


 console.log(triangelstars(5));