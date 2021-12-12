package com.letscode.OOP.entities;

public class Car {

    //Attributes
    public String manufacturer;
    public String model;
    public String category;
    public int doors;
    public int seats;
    private int currentSpeed;
    private String motorization;

    public Car(String manufacturer, String model, String category, int doors, int seats){
        this.manufacturer = manufacturer;
        this.model =  model;
        this.category = category;
        this.doors = doors;
        this.seats = seats;
    }

    //Methods
    public  String acelerate(){
        this.currentSpeed = this.currentSpeed + 1;
        return "VRUUUUM";
    }

    public void setManufacturer(String manufacturer){
        this.manufacturer = manufacturer;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getDoors() {
        return doors;
    }

    public void setDoors(int doors) {
        this.doors = doors;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    @Override
    public String toString(){
        return this.category + ": " + this.manufacturer + ", " + this.model;
    }
}
