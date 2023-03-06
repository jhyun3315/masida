package com.ssafy.cocktail.backend.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping(value = "/api/v1/temp/")
@RequestMapping(value = "/v3/api-docs/")
@Tag(name = "Template", description = "템플릿 API Document")
public class TemplateController {

//    // 필드 주입이 아닌 생성자 주입형태로 사용합니다. '생성자 주입 형태'로 사용합니다.
//    private final TemplateService templateService;

//    public TemplateController(TemplateService ts) {
//        this.templateService = ts;
//    }

    @GetMapping("main")
    @Operation(summary = "템플릿 화면", description = "템플릿 화면을 출력합니다.", tags = {"View"})
    public String selectTemplateView() {
        return "temp/templatePage";
    }

    /**
     * [API] 템플릿 리스트 출력 함수
     *
     * @return ApiResponseWrapper<List < TemplateVO>> : 응답 결과 및 응답 코드 반환
     */
//    @PostMapping("templateList")
//    @Operation(summary = "템플릿 리스트", description = "템플릿의 모든 리스트를 조회합니다.")
//    public ResponseEntity<ApiResponseWrapper<List<TemplateVO>>> selectTemplateList() {
//        List<TemplateVO> resultList = templateService.selectTempList();
//        ApiResponseWrapper<List<TemplateVO>> arw = new ApiResponseWrapper<>(resultList, SuccessCode.SELECT_SUCCESS.getStatus(), SuccessCode.SELECT_SUCCESS.getMessage());
//        return new ResponseEntity<>(arw, HttpStatus.OK);
//    }
}