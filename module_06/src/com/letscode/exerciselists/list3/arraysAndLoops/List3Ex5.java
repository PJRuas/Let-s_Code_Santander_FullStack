package com.letscode.exerciselists.list3.arraysAndLoops;

//"Write a code that takes in 5 names, add them to a guest list, and inform the longest name in the list."

import java.util.Scanner;

public class List3Ex5 {

    public static void main(String[] args) {
    
        String[] guestList = addToGuestList(5);
        System.out.println("Longest name in guest list is: " + checkLongestName(guestList));

    }

    public static String[] addToGuestList(int quantity){
        String[] guests = new String[quantity];
        Scanner input = new Scanner(System.in);
        for(int i = 0; i < guests.length; i++){
            System.out.println("Please, name the guest:");
            guests[i] = input.nextLine();
        }
        return guests;
    }

    public static String checkLongestName (String[] names){
        String longestName = "";
        for(int i = 0; i < names.length; i++){
            longestName = longestName.length() > names[i].length() ? longestName : names[i];
        }
        return longestName;
    }



}
