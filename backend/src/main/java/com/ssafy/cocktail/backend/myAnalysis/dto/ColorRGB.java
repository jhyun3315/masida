package com.ssafy.cocktail.backend.myAnalysis.dto;

public enum ColorRGB {
    빨간색("#E02A1C"),
    주황색("#FFAD03"),
    분홍색("#FF99CC"),
    노란색("#D0B83A"),
    초록색("#235C18"),
    파란색("#0000E1"),
    남색("#2E354F"),
    보라색("#C800FF"),
    갈색("#B26132"),
    흰색("#CCC8C8");

    private final String rgb;
    ColorRGB(String rgb){
        this.rgb = rgb;
    }

    public String getValue() {
        return this.rgb;
    }
}
