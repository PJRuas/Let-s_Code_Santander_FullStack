package com.letscode.validators.student;

import com.aula.ValidationRule;

public class AverageRateRule implements ValidationRule<Student> {

    @Override
    public boolean validate(Student student) {
        return (student.getAverageRate() >= 7);
    }
}
