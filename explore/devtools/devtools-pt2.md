![calculateSum](result-calculateSum.PNG)

![dataType](result-dataType.PNG)

The issue was the retrieval of the element from the HTML input was of the type string. I solved this by typecasting ```num1``` and ```num2``` to Numbers on lines 4-5:
![fix](fix.PNG)
