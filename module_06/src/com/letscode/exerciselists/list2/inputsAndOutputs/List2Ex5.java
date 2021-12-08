package com.letscode.exerciselists.list2.inputsAndOutputs;

//"Write a code that converts inches to centimeters"

import java.util.Scanner;

public class List2Ex5 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Are you tired of measurements units you don't understand?" +
                           "\nLet this code solve one of them for you! " +
                            "\nJust insert a value in inches and it can tell you in centimeters." +
                            "\nGive it a try!");
        float inches = scanner.nextFloat();
        System.out.printf("%.2f\" = %.2fcm %n", inches, (inches*2.54));
        }

    }