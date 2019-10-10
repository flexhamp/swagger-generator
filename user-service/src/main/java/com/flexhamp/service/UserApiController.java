package com.flexhamp.service;

//import com.flexhamp.service.api.UserApi;
//import com.flexhamp.service.model.ListUserResponse;
//import com.flexhamp.service.model.UserCreateRequest;
//import com.flexhamp.service.model.UserResponse;
import com.flexhamp.service.api.SkillApi;
import com.flexhamp.service.model.Skill;
import com.flexhamp.service.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapperResultSetExtractor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@Controller
public class UserApiController implements SkillApi {
    @Autowired
    TestService service;

    @Override
    public ResponseEntity<List<Skill>> createSkill(@Valid @RequestBody Skill skill) {
        System.out.println(skill);
        service.create(skill);
        return ResponseEntity.ok(service.findAll());
    }

    @Override
    public ResponseEntity<List<Skill>> deleteSkill(Long skillId) {
        System.out.println(skillId);
        return null;
    }

    @Override
    public ResponseEntity<Skill> getSkillById(Long skillId) {
        return null;
    }

    @Override
    public ResponseEntity<List<Skill>> getSkills() {
        return ResponseEntity.ok(service.findAll());
    }

    @Override
    public ResponseEntity<List<Skill>> updateSkill(@Valid Skill name) {
        return null;
    }

    //    @Override
//    public ResponseEntity<ListSkillResponse> updateSkill(@Valid Skill name) {
//        return null;
//    }
    //    @Override
//    public ResponseEntity<ListUserResponse> createUser(UserCreateRequest user) {
//        ListUserResponse userResponse = new ListUserResponse();
//
//        System.out.println("-----------------------------------------");
//        System.out.println(user);
//
//        for (int i = 0; i < 10; i++) {
//            UserResponse response = new UserResponse();
//            response.setId(i);
//            response.setName("Test " + i);
//            userResponse.add(response);
//        }
//        return  ResponseEntity.ok(userResponse);
//    }
//
//    @Override
//    public ResponseEntity<ListUserResponse> getUsers() {
//        ListUserResponse userResponse = new ListUserResponse();
//
//        for (int i = 0; i < 10; i++) {
//            UserResponse response = new UserResponse();
//            response.setId(i);
//            response.setName("Test " + i);
//            userResponse.add(response);
//        }
//        return  ResponseEntity.ok(userResponse);
//    }
}
