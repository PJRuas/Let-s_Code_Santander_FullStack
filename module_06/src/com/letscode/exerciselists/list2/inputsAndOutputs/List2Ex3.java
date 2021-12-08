package com.letscode.exerciselists.list2.inputsAndOutputs;

//"Write a code that converts temperature values from Celsius to Fahrenheit"

import java.util.Scanner;

public class List2Ex3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome to the exclusive Celsius to Fahrenheit converter! " +
                            "\nIt does that, and nothing more! \nSo, please insert a Celsius value:");
        float celsiusTemp = scanner.nextFloat();
        System.out.printf("%.1f⁰C = %.1f⁰F %n", celsiusTemp, ((celsiusTemp*1.8) + 32));
        System.out.println("Try our premium subscription and convert more temperature formats! *coming soon");
    }

}
