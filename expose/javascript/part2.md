# Part 2. A Little More of a Challenge... #

1. ```3``` is printed because ```i``` increments while ```i < prices.length``` in which ```prices.length = 3``` since ```prices = [100, 200, 300]```.
2. ```150``` is printed because last iteration of the for-loop is when ```i = 2```, thus ```var discountedPrice = prices[2] * (1 - 0.5)``` in which ```prices[2] = 300```.
3. ```150``` is printed by the same reasoning as _question 2_, with the addition that ```finalPrice = Math.round(discountedPrice * 100) / 100``` which essentially rounds to a whole number, but 150 is a whole number already.
4. ```[50, 100, 150]``` is returned because the function halves all the prices of the input array through ```var discountedPrice = prices[2] * (1 - 0.5)``` and pushing it in order to ```discounted```.
5. ```Error on line 12```. ```i``` is declared in the block scope of the for-loop from lines 6-10, but line 12 references ```i``` outside of the for-loop.
6. ```Error on line 13```. ```discountedPrice``` is declared in the block scope of the for-loop from lines 6-10, but line 13 references ```discountedPrice``` outside of the for-loop.
7. ```150``` is printed by the same reasoning as _question 3_. ```finalPrice``` is declared in the overall function scope, in which line 14 references ```finalPrice``` within the same function scope.
8. ```[50, 100, 150]``` is returned by the same reasoning as _question 4_. All variable references are contained within their respective scopes.
9. ```Error on line 11```. ```i``` is declared in the block scope of the for-loop from lines 6-9, but line 11 references ```i``` outside of the for-loop.
10. ```3``` is printed because line 4 initializes ```const length = prices.length``` in which ```prices = [100, 200, 300]```.
11. ```[50, 100, 150]``` is returned. All variable references are contained within their respective scopes and any ```const``` variables are never reassigned.
12. 1-5 corresponds to A-E resprectively
    1. ```student.name```
    2. ```student['Grad Year']```
    3. ```student.greeting()```
    4. ```student['Favorite Teacher'].name```
    5. ```student.courseLoad[0]```
13. 1-8 corresponds to A-H respectively
    1.  '3' + 2 = ```'32'```, 2 is typecasted to string and '3' concatenates with '2'.
    2.  '3' - 2 = ```1```, '3' is typecasted to int and 3 - 2 = 1.
    3.  3 + null = ```3```, null is typecasted to int 0 and 3 + 0 = 3.
    4.  '3' + null = ```'3null'``` null is typecasted to string and '3' concatentates with null.
    5.  true + 3 = ```4```, true is typecasted to int 1 and 1 + 3 = 4.
    6.  false + null = ```0```, false and null are typecasted to int 0 and 0 + 0 = 0.
    7.  '3' + undefined = ```'3undefined'```, undefined is typecasted to string and '3' concatenates with 'undefined'.
    8.  '3' - undefined = ```NaN```, '3' and undefined are typecasted to int 3 and NaN respectively and 3 - NaN = NaN.
14. 1-6 corresponds to A-F respectively
    1.  '2' > 1 = ```true```, '2' is typecasted to int and 2 > 1 is true.
    2.  '2' < '12' = ```false```, '12' is lexographically smaller than '2' because its first character is '1', therefore '2' < '12' is false.
    3.  2 == '2' = ```true```, '2' is typecasted to int and 2 = 2.
    4.  2 === '2' = ```false```, 2 and '2' are strictly not the same type, so false is returned.
    5.  true == 2 = ```false```, true is typecasted to int 1 and 1 = 2 is false.
    6.  true === Boolean(2) = ```true```, 2 typecasts to Boolean and any value other than 0, null, undefined, NaN, "" is true, so true = true strictly.
15. ```==``` checks for equality after implicit type conversions, but ```===``` checks for strict equality without any automatic type conversions.
16. In ```part2-question16.js```
17. ```[2, 4, 6]``` is returned. ```modifyArray([1,2,3], doSomething)``` iterates over ```[1,2,3]``` on lines 3-5, pushing the result of calling ```doSomething(num)``` on the ```i```'th index of the given array. ```doSomething(num)``` returns the result of multiplying ```num``` by 2.
18. In ```part2-question18.js```
19. ```1    4   3   2``` is printed in order.