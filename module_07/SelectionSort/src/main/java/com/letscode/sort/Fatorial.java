package com.letscode.sort;

public class Fatorial {

    public static int calculate(int n){
        int x = n-1;
        int y = n;
        while (x > 0){
            y *= x;
            x--;
        }
        return y;
    }

    public static int recursive(int n){
        if (n <= 1) return 1;
        return n * recursive(n - 1);
    }

}
