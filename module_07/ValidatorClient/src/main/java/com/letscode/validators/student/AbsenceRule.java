package com.letscode.validators.student;

import com.aula.ValidationRule;

public class AbsenceRule implements ValidationRule<Student> {

    @Override
    public boolean validate(Student student) {
        return (student.getAbsences() < 3);
    }
}
