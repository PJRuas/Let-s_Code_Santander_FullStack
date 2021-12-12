package com.letscode.exerciselists.list3.arraysAndLoops;

//"Write a code that takes a word and returns it backwards"

import java.util.Scanner;

public class List3Ex2 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Which word do you want to backward?");
        String word = input.nextLine();
        System.out.println("\n" + backwardWord(word));

    }

    public static String backwardWord(String word){
        char[] dividedWord = word.toCharArray();
        String backwardWord = "";
        for(int i = dividedWord.length - 1; i >= 0; i--){
            backwardWord += dividedWord[i];
        }
        return backwardWord;
    }

}
