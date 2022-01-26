package com.aula;

public interface ValidationRule<E> {
    boolean validate(E genericValue);
}
