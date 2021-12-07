package com.letscode.variables;

import com.letscode.variables.enums.TeacherContractType;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanTeacherName = new Scanner(System.in);
        System.out.println("Please, insert the teacher's name: ");

        String principalTeacherName = scanTeacherName.nextLine();
        char teacherInitial = principalTeacherName.charAt(0);

        int age = 29;
        long teacherRegistrationNumber = 334253L;

//        float teacherPaycheck = 1000.50f;

        boolean isPrincipal = true;

        final float MINIMUN_HOURLY_PAYMENT = 45f;

        TeacherContractType teacherContractType = TeacherContractType.HALF_TIME;

        System.out.println("The teacher's name is " + principalTeacherName);
        System.out.println("He is " + age + " years old.");
        System.out.println("His registration number is " + teacherRegistrationNumber);
//        System.out.printf("And he earns U$%.2f monthly. %n", teacherPaycheck);
        System.out.println("His contract type is " + teacherContractType.toString().toLowerCase().replace('_', ' '));

    }
    public static float calculateTeacherBonus(float teacherPaycheck, float bonusFactor) {
        return teacherPaycheck * bonusFactor;

    }

    public static float calculatePaycheck(float teacherPaycheck){
        final float MINIMUN_HOURLY_PAYMENT = 45f;
        return teacherPaycheck * MINIMUN_HOURLY_PAYMENT;
    }
}
