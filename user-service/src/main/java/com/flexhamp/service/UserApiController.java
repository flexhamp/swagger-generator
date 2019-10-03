package com.flexhamp.service;

import com.flexhamp.service.api.UserApi;
import com.flexhamp.service.model.ListUserResponse;
import com.flexhamp.service.model.UserCreateRequest;
import com.flexhamp.service.model.UserResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class UserApiController implements UserApi {
    @Override
    public ResponseEntity<Void> createUser(UserCreateRequest user) {
        // TODO: implementation
        return null;
    }

    @Override
    public ResponseEntity<ListUserResponse> getUsers() {
        ListUserResponse userResponse = new ListUserResponse();

        for (int i = 0; i < 10; i++) {
            UserResponse response = new UserResponse();
            response.setId(i);
            response.setName("Test " + i);
            userResponse.add(response);
        }
        return  ResponseEntity.ok(userResponse);
    }
}
