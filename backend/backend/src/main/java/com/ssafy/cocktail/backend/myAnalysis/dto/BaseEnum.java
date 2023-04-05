package com.ssafy.cocktail.backend.myAnalysis.dto;

public enum BaseEnum {
    진("jin"),
    럼("rum"),
    보드카("vodka"),
    위스키("whisky"),
    리퀴르("liqueur"),
    브랜디("brandy"),
    테킬라("tequila"),
    맥주("beer"),
    와인("wine"),
    메즈칼("mezcal"),
    스프릿("spirits");

    private final String base;
    BaseEnum(String base){
        this.base = base;
    }

    public String getValue() {
        return this.base;
    }
}
