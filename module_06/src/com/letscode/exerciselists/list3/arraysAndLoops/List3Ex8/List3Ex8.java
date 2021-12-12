package com.letscode.exerciselists.list3.arraysAndLoops.List3Ex8;

import java.util.Scanner;

public class List3Ex8 {

    public static void main(String[] args) {

        Person8[] people = listPeople(1);
        checkIMC(people);


    }

    public static Person8[] listPeople(int quantity){
        Person8[] people = new Person8[quantity];
        Scanner input = new Scanner(System.in);
        for(int i = 0; i < people.length; i++){
            System.out.println("Please, name this person");
            String name = input.next();
            System.out.println("Now, how much does this individual weight?");
            float weight = input.nextFloat();
            System.out.println("Now, how tall is this individual weight?");
            float height = input.nextFloat();
            people[i] = new Person8(name, weight, height);
        }
        return people;
    }

    public static void checkIMC(Person8[] people) {
        for (int i = 0; i < people.length; i++){
            float currentIMC = people[i].weight/(people[i].height*people[i].height);
            if (currentIMC < 18.5) {
                System.out.printf("%s is underweight. His/her IMC is %.1f", people[i].name, currentIMC);
            } else if (currentIMC > 25 ) {
                System.out.printf("%s is overweight. His/her IMC is %.1f", people[i].name, currentIMC);
            }
        }
    }

}
