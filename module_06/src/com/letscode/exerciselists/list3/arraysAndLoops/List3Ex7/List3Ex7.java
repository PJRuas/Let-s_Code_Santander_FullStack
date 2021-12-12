package com.letscode.exerciselists.list3.arraysAndLoops.List3Ex7;

//"Write a code that takes name and age of 5 people and inform the youngest, the oldest and the average age."

import java.util.Scanner;

public class List3Ex7 {

    public static void main(String[] args) {

        Person[] people = listPeople(5);
        Person youngest = checkYoungest(people);
        Person oldest = checkOldest(people);
        int averageAge = averageAge(people);
        System.out.printf("The youngest person in the group is %s, and he/she is %dy.o.%n", youngest.name, youngest.age);
        System.out.printf("The oldest person in the group is %s, and he/she is %dy.o.%n", oldest.name, oldest.age);
        System.out.printf("The group's average age is %dy.o.", averageAge);
    }

    public static Person[] listPeople(int quantity){
        Person[] people = new Person[quantity];
        Scanner input = new Scanner(System.in);
        for(int i = 0; i < people.length; i++){
            System.out.println("Please, name this person");
            String name = input.next();
            System.out.println("Now, how old is this individual?");
            int age = input.nextInt();
            people[i] = new Person(name, age);
        }
        return people;
    }

    public static Person checkYoungest (Person[] people){
        Person youngest = people[0];
        for(int i = 0; i < people.length; i++){
            youngest = youngest.age < people[i].age ? youngest : people[i];
        }
        return youngest;
    }

    public static Person checkOldest (Person[] people){
        Person oldest = people[0];
        for(int i = 0; i < people.length; i++){
            oldest = oldest.age > people[i].age ? oldest : people[i];
        }
        return oldest;
    }

    public static int averageAge (Person[] people){
        int totalAge = 0;
        for(int i = 0; i < people.length; i++){
            totalAge += people[i].age;
        }
        return totalAge/people.length;
    }

}