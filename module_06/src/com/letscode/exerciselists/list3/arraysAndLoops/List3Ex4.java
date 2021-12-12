package com.letscode.exerciselists.list3.arraysAndLoops;

//"Write a code that takes in 5 numbers and shows, the most valuable, the least valuable and the total average."

import java.util.Scanner;

public class List3Ex4 {

    public static void main(String[] args) {

        int[] numbers = takeNumbers(5);

        System.out.printf("Highest value: %d%n", maximum(numbers));
        System.out.printf("Lowest value: %d%n", minimun(numbers));
        System.out.printf("Average value: %d", average(numbers));

    }

    public static int[] takeNumbers(int quantity){
        int[] numbers = new int[quantity];
        Scanner input = new Scanner(System.in);
        for(int i = 0; i < numbers.length; i++){
            System.out.println("Say a number:");
            numbers[i] = input.nextInt();
        }
        return numbers;
    }

    public static int maximum(int[] numbers){
        int maximum = numbers[0];
        for (int i = 0; i < numbers.length; i++){
            maximum = numbers[i] > maximum? numbers[i] : maximum;
        }
        return maximum;
    }

    public static int minimun(int[] numbers){
        int minimum = numbers[0];
        for (int i = 0; i < numbers.length; i++){
            minimum = numbers[i] < minimum? numbers[i] : minimum;
        }
        return minimum;
    }

    public static int average(int[] numbers){
        int total = 0;
        int counter = 0;
        for (int i = 0; i < numbers.length; i++){
            total += numbers[i];
            counter++;
        }
        return total/counter;
    }

}
