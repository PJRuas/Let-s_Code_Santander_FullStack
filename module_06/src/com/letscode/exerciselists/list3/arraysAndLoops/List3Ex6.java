package com.letscode.exerciselists.list3.arraysAndLoops;

//"Write a code that takes in a word and returns it with all uneven characters as capitals"

import java.util.Scanner;

public class List3Ex6 {

    public static void main(String[] args) {
     Scanner scanner = new Scanner(System.in);
     System.out.println("Say a word: ");
     String word = scanner.nextLine();
     System.out.println(unevenLettersToCapitals(word));
    }

    public static String unevenLettersToCapitals(String word){
        char[] dividedWord = word.toCharArray();
        for (int i = 0; i < dividedWord.length; i++){
            dividedWord[i] = i % 2 == 0 ? dividedWord[i] : Character.toUpperCase(dividedWord[i]);
        }
        return new String(dividedWord);
    }

}
