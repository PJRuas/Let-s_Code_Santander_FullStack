package com.letscode.utils;
import org.junit.Assert;
import org.junit.Test;

public class ArrayUtilsTest {

    @Test
    public void isEmptyWithNullArray() {
        String[] array = null;
        boolean isEmpty = ArrayUtils.isEmpty(array);
        Assert.assertTrue(isEmpty);
    }

    @Test
    public void isEmptyWithArrayLengthZero() {
        Integer[] array = new Integer[0];
        boolean isEmpty = ArrayUtils.isEmpty(array);
        Assert.assertTrue(isEmpty);
    }

    @Test
    public void isEmptyWithAllElementsNull() {
        String[] array = {null, null, null};
        boolean isEmpty = ArrayUtils.isEmpty(array);
        Assert.assertTrue(isEmpty);
    }

    @Test
    public void isNotEmptyWithNotNullElements() {
        String[] array = {"test", null, null};
        boolean isEmpty = ArrayUtils.isEmpty(array);
        Assert.assertFalse(isEmpty);
    }
}