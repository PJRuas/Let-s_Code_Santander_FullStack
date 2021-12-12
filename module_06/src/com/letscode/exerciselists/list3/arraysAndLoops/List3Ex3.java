package com.letscode.exerciselists.list3.arraysAndLoops;

//"Write a code that takes 5 numbers and then shows first the uneven, and last the even."

import java.util.Scanner;

public class List3Ex3 {

    public static void main(String[] args) {

        evenUneven(takeNumbers(5));

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

    public static void evenUneven (int[] numbers){
        String even = "";
        String uneven = "";
        for (int i = 0; i < numbers.length; i++){
            if (numbers[i]%2 == 0) {
                even += Integer.toString(numbers[i]) + " ";
            } else {
                uneven += Integer.toString(numbers[i]) + " ";
            }
        }
        System.out.println("Uneven numbers: " + uneven);
        System.out.println("Even number: " + even);
    }

}
