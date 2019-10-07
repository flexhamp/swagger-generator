package com.flexhamp.service.service;

import com.flexhamp.service.domain.Skills;
import com.flexhamp.service.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    public Skills saveOrUpdateSkill(Skills skills){
        if(skills.getStatus()==null || skills.getStatus()==""){
            skills.setStatus("TO_DO");
        }
        return skillRepository.save(skills);
    }

    public List<Skills> findAll() {
        return (List<Skills>) skillRepository.findAll();
    }
}
