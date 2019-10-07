package com.flexhamp.service.web;


import com.flexhamp.service.domain.Skills;
import com.flexhamp.service.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/skill")
@CrossOrigin
public class SkillController {

    @Autowired
    private SkillService skillService;

    @PostMapping("")
    public ResponseEntity<?> addPTToBoard(@Valid @RequestBody Skills skills, BindingResult result){

        if(result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();

            for(FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }

            errorMap.put("Test123", "Test123");

            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Skills newPT = skillService.saveOrUpdateSkill(skills);

        return new ResponseEntity<Skills>(newPT, HttpStatus.CREATED);
    }

}
