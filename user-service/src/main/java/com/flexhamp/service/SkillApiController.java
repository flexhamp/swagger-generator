package com.flexhamp.service;

import com.flexhamp.service.api.SkillApi;
import com.flexhamp.service.model.Skill;
import com.flexhamp.service.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)
@Controller
public class SkillApiController implements SkillApi {
    @Autowired
    SkillService service;

    @Override
    public ResponseEntity<List<Skill>> createSkill(@Valid @RequestBody Skill skill) {
        System.out.println(skill);
        service.create(skill);
        return ResponseEntity.ok(service.findAll());
    }

    @Override
    public ResponseEntity<List<Skill>> deleteSkill(@PathVariable("skillId") Long skillId) {
        service.delete(skillId);
        return ResponseEntity.ok(service.findAll());
    }

    @Override
    public ResponseEntity<Skill> getSkillById(@PathVariable("skillId") Long skillId) {
        return ResponseEntity.ok(service.get(skillId));
    }

    @Override
    public ResponseEntity<List<Skill>> getSkills() {
        return ResponseEntity.ok(service.findAll());
    }

    @Override
    public ResponseEntity<List<Skill>> updateSkill(@Valid @RequestBody Skill skill) {
        System.out.println(skill.toString());
        service.update(skill);
        return ResponseEntity.ok(service.findAll());
    }
}
