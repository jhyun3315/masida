package com.ssafy.cocktail.backend.myAnalysis.dto;

public enum ColorRGB {
    빨간색("#F00A0A"),
    주황색("#FF9600"),
    분홍색("#FF99CC"),
    노란색("#FFFF00"),
    초록색("#0A820A"),
    파란색("#0000FF"),
    남색("#000080"),
    보라색("#B400BE"),
    갈색("#964B00"),
    흰색("#ffffff");

    private final String rgb;
    ColorRGB(String rgb){
        this.rgb = rgb;
    }

    public String getValue() {
        return this.rgb;
    }
}
