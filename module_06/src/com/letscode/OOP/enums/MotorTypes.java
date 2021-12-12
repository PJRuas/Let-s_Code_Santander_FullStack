package com.letscode.OOP.enums;

public enum MotorTypes {
    COMBUSTION("Fuel"),
    ELECTRIC("Electric"),
    HYBRID("Hybrid");

    private String description;

    MotorTypes(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
