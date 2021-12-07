package com.letscode.exerciselists.list2.inputsAndOutputs;

//"Write a code that takes two integers and returns the result of the operations: sum, subtraction, multiplication
// and division. Always consider their given order."


import java.util.Scanner;

public class List2Ex1 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Please, provide the first number:");
        int firstNumber = scanner.nextInt();
        System.out.println("Now, second number:");
        int secondNumber = scanner.nextInt();
        System.out.println("Which operation would you like to perform? \n Sum: 0 | Subtraction: 1 | Multiplication: 2 | Division: 3");
        int commander = scanner.nextInt();

        operationHandler(commander, firstNumber, secondNumber);
    };

    public static int sum(int firstNumber, int secondNumber) {
        int sum = firstNumber + secondNumber;
        System.out.printf("%d + %d = %d %n", firstNumber, secondNumber, sum);
        return sum;
    };

    public static int subtraction(int firstNumber, int secondNumber) {
        int subtraction = firstNumber - secondNumber;
        System.out.printf("%d - %d = %d %n", firstNumber, secondNumber, subtraction);
        return subtraction;
    };

    public static int multiplication(int firstNumber, int secondNumber) {
        int multi = firstNumber * secondNumber;
        System.out.printf("%d x %d = %d %n", firstNumber, secondNumber, multi);
        return multi;
    };

    public static float division(int firstNumber, int secondNumber) {
        float div = (float)firstNumber/ secondNumber;
        System.out.printf("%d / %d = %.2f %n", firstNumber, secondNumber, div);
        return div;
    };

    public static void operationHandler(int commander, int firstNumber, int secondNumber){
        switch (commander){
            case 0 :
                sum(firstNumber, secondNumber);
                break;
            case 1 :
                subtraction(firstNumber, secondNumber);
                break;
            case 2 :
                multiplication(firstNumber, secondNumber);
                break;
            case 3 :
                division(firstNumber, secondNumber);
                break;
        }
    }

}
