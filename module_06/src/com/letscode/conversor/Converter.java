package com.letscode.conversor;

public class Converter {

    public static void main(String[] args) {


        //Km to feet converter
        final float KM_TO_FEET_FACTOR = 3280.84f;
        float kilometers = 10;

        System.out.printf("%.2f kilometers equals to %.2f feet.", kilometers, (kilometers * KM_TO_FEET_FACTOR));

    }
}
