package com.letscode.validators.student;

import com.aula.ValidationEngine;
import com.aula.ValidationRule;

public class StudentValidator {

    public boolean verifyApproval(Student student) {
        ValidationRule<Student>[] rules = new ValidationRule[]{new AbsenceRule(), new AverageRateRule()};
        ValidationEngine<Student> newValidationEngine = new ValidationEngine<>(rules);
        return newValidationEngine.startEngine(student);
    }
}
