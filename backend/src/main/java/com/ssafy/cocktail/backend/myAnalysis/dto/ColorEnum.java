package com.ssafy.cocktail.backend.myAnalysis.dto;

public enum ColorEnum {
    빨간색("red"),
    주황색("orange"),
    분홍색("pink"),
    노란색("yellow"),
    초록색("green"),
    파란색("blue"),
    연보라색("violet"),
    보라색("purple"),
    갈색("brown");

    private final String color;
    ColorEnum(String color){
        this.color = color;
    }

    public String getValue() {
        return this.color;
    }
}
