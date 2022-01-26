package com.letscode.utils;

public class ArrayUtils {

    public static boolean isEmpty(Object[] array){
        return array == null || array.length == 0 || allElementsNull(array);
    }

    private static boolean allElementsNull(Object[] array) {
        boolean allNull = true;

        for (Object s : array) {
            if (s != null){
                allNull = false;
                break;
            }
        }
        return allNull;
    }


}
