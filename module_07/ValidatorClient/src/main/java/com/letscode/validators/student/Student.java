package com.letscode.validators.student;

import lombok.Getter;

@Getter
public class Student {
    private String name;
    private double averageRate;
    private int absences;

    public Student(double averageRate, int absences, String name) {
        this.name = name;
        this.averageRate = averageRate;
        this.absences = absences;
    }
}
