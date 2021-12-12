package com.letscode.exerciselists.list3.arraysAndLoops;

//"Write a code that takes in the name of 5 fruits and add them to basket. After 5 inputs, it should show a list with all of them."

import java.util.Scanner;

public class List3Ex1 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("You arrived at the grocery store and take a basket.\n" +
                            "Some fruits look nice, and you decide to take them home.\n" +
                            "What are your intentions with those fruits? No one knows, but let's leave it to another day.\n" +
                            "How many victims, I mean fruits, did you take?\n");
        int fruitsInBasket = input.nextInt();

        shoppingCart(fruitsInBasket);
    }

    public static void shoppingCart(int capacity ){
        String[] fruitBasket = new String[capacity];
        Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < capacity; i++) {
            System.out.println("You take a fruit and place it in your basket. What fruit is it?");
            fruitBasket[i] = scanner.nextLine();
        }
        System.out.println("You head to the cashier with your basket full of fruits.");
        for (int i = 0; i < capacity; i++){
            System.out.println("You took "+ fruitBasket[i]);
        }
    }

}
