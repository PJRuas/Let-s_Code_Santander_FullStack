package com.letscode.exerciselists.list2.inputsAndOutputs;

//"Write a code that takes today's dollar's currency rate, and a value in brazilian real, and returns the exchange rate in dollars.
//The code should use output formatting relative to each currency."

import java.util.Scanner;

public class List2Ex4 {
    public static void main(String[] args) {

       Scanner scanner = new Scanner(System.in);
       System.out.println("Today's exchange rate for US-BRL is:");
       float exchangeRate = scanner.nextFloat();

       System.out.println("Insert the desired value in BRL:");
       float valueBRL = scanner.nextFloat();

        System.out.printf("R$%.2f = US$%.2f", valueBRL, (valueBRL*exchangeRate));

    }

}
