package com.aula;

public class ValidationEngine<Any> {

    public ValidationEngine(ValidationRule<Any>[] validationRules) {
        this.validationRules = validationRules;
    }

    private ValidationRule<Any>[] validationRules;

    public boolean startEngine(Any target){
        boolean valid = true;
        for (ValidationRule rule: validationRules) {
            valid = rule.validate(target);
            if (!valid) break;
            }
        return valid;
    }
}
