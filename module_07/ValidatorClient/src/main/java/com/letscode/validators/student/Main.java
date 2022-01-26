package com.letscode.validators.student;

public class Main {
    public static void main(String[] args) {
        StudentValidator validator = new StudentValidator();
        Student Pedro = new Student(8,0, "Pedro");
        Student Leon = new Student(5, 0, "Leon");
        Student Roger = new Student(9, 5, "Roger");
        Student Luisa = new Student(3, 6, "Luisa");

        Student[] students = {Pedro, Leon, Roger, Luisa};
        for (Student student : students) {
            System.out.println(student.getName());
            System.out.println(validator.verifyApproval(student));
        }
    }

}
