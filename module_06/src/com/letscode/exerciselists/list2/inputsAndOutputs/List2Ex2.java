package com.letscode.exerciselists.list2.inputsAndOutputs;

//"Write a code that informs a given number's times table. This number should be between 1~10"

import java.util.Scanner;

public class List2Ex2 {
    public static void main(String[] args) {
        
        timesTable(numberHandler());

    };

    public static int numberHandler(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please, provide a number between 1~10:");
        int givenNumber = scanner.nextInt();

        while (givenNumber < 1 || givenNumber > 10) {
            System.out.println("The number must not be lesser than 1 neither greater than 10. \nWhich number is it?");
            givenNumber = scanner.nextInt();
        }

        return givenNumber;
    };

    public static void timesTable(int givenNumber){
        for (int i = 1; i <= 10; i++){
            System.out.printf("%d x %d = %d %n", givenNumber, i, (givenNumber*i));
        }
    }

}
