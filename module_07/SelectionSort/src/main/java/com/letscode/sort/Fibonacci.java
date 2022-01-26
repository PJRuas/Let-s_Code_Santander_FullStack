package com.letscode.sort;

public class Fibonacci {

    public static int generateFibonacci (int n){
        if (n <= 1) return n;
        return generateFibonacci(n-1) + generateFibonacci(n - 2);
    }
}
