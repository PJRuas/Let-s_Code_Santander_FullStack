package com.letscode.sort;

public class SelectionSort {

    public static int[] sort(int[] array){
        int least = array[0];
        int[] newArray = new int[array.length];
        int[] ignore = new int[array.length];
        boolean check;
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array.length ; j++) {
                check = false;
                for (int value : ignore) {
                    if (value == j){
                        check = true;
                    }
                }
                if (least <= array[j] && !check){
                    least = array[j];
                    ignore[i] = j;
                    newArray[i] = least;
                }
            }
        }
        return newArray;
    }

}
