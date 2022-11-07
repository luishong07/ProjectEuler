// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


// How many such routes are there through a 20×20 grid?

//graph theory
//visualize 2x2 as a 3x3 where each vertex is an array element with possible values of on or off
// the grid is (2+1)x(2+1) = n+1 x n+1 => n =2
// the maximum of steps is 2n = 2x 2
// therefore the total number of  all possible paths are calculated by choose(n, 2n) = (2n)!/(n!*n!)


// 3x3 ... 2x2 as stated in problem
//n = 2
// total paths = (2*2)!/(2!*2!) = 6
//

//4x4 actually 3x3 sort of ... counting vertices
//n = 3
// total paths = (2*3)!/(3!*3!) = 20 .. checked manually

// for 20 x 20
