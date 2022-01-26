package com.letscode.utils;

public class ArrayUtils {

    public static boolean isEmpty(Object[] array) {
        return array == null || array.length == 0 || allElementsNull(array);
    }

    public static boolean allElementsNull(Object[] array) {
        boolean b = true;
        for (Object element : array){
            if (element != null){
                b = false;
                break;
            }
        }
        return b;
    }

}
