/**
 * NOTE: This class is auto generated by the swagger code generator program (2.4.7).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package com.flexhamp.service.api;

import com.flexhamp.service.model.Skill;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.*;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-10-11T15:58:52.036+07:00")

@Api(value = "Skill", description = "the Skill API")
public interface SkillApi {

    Logger log = LoggerFactory.getLogger(SkillApi.class);

    default Optional<ObjectMapper> getObjectMapper() {
        return Optional.empty();
    }

    default Optional<HttpServletRequest> getRequest() {
        return Optional.empty();
    }

    default Optional<String> getAcceptHeader() {
        return getRequest().map(r -> r.getHeader("Accept"));
    }

    @ApiOperation(value = "Creates a new skill", nickname = "createSkill", notes = "", response = Skill.class, responseContainer = "List", tags={ "skill", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "", response = Skill.class, responseContainer = "List"),
        @ApiResponse(code = 400, message = "Validation error") })
    @RequestMapping(value = "/skill",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<List<Skill>> createSkill(@ApiParam(value = "The skill data"  )  @Valid @RequestBody Skill skill) {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("application/json")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("[ {  \"study\" : 6.027456183070403,  \"name\" : \"Java\",  \"progress\" : 1.4658129805029452,  \"id\" : 0}, {  \"study\" : 6.027456183070403,  \"name\" : \"Java\",  \"progress\" : 1.4658129805029452,  \"id\" : 0} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type application/json", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default SkillApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }


    @ApiOperation(value = "Deletes a skill", nickname = "deleteSkill", notes = "", response = Skill.class, responseContainer = "List", tags={ "skill", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "", response = Skill.class, responseContainer = "List"),
        @ApiResponse(code = 400, message = "Invalid ID supplied"),
        @ApiResponse(code = 404, message = "Skill not found") })
    @RequestMapping(value = "/skill/{skillId}",
        produces = { "application/json" }, 
        method = RequestMethod.DELETE)
    default ResponseEntity<List<Skill>> deleteSkill(@ApiParam(value = "Skill id to delete",required=true) @PathVariable("skillId") Long skillId) {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("application/json")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("[ {  \"study\" : 6.027456183070403,  \"name\" : \"Java\",  \"progress\" : 1.4658129805029452,  \"id\" : 0}, {  \"study\" : 6.027456183070403,  \"name\" : \"Java\",  \"progress\" : 1.4658129805029452,  \"id\" : 0} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type application/json", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default SkillApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }


    @ApiOperation(value = "Find skill by ID", nickname = "getSkillById", notes = "Returns a single skill", response = Skill.class, tags={ "skill", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Skill.class),
        @ApiResponse(code = 400, message = "Invalid ID supplied"),
        @ApiResponse(code = 404, message = "Skill not found") })
    @RequestMapping(value = "/skill/{skillId}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    default ResponseEntity<Skill> getSkillById(@ApiParam(value = "ID of skill to return",required=true) @PathVariable("skillId") Long skillId) {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("application/json")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("{  \"study\" : 6.027456183070403,  \"name\" : \"Java\",  \"progress\" : 1.4658129805029452,  \"id\" : 0}", Skill.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type application/json", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default SkillApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }


    @ApiOperation(value = "Gets a list of skill", nickname = "getSkills", notes = "", response = Skill.class, responseContainer = "List", tags={ "skill", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "", response = Skill.class, responseContainer = "List") })
    @RequestMapping(value = "/skill",
        produces = { "application/json" }, 
        consumes = { "*/*" },
        method = RequestMethod.GET)
    default ResponseEntity<List<Skill>> getSkills() {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("application/json")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("[ {  \"study\" : 6.027456183070403,  \"name\" : \"Java\",  \"progress\" : 1.4658129805029452,  \"id\" : 0}, {  \"study\" : 6.027456183070403,  \"name\" : \"Java\",  \"progress\" : 1.4658129805029452,  \"id\" : 0} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type application/json", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default SkillApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }


    @ApiOperation(value = "Update an existing skill", nickname = "updateSkill", notes = "", response = Skill.class, responseContainer = "List", tags={ "skill", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "", response = Skill.class, responseContainer = "List"),
        @ApiResponse(code = 400, message = "Invalid ID supplied"),
        @ApiResponse(code = 404, message = "Skill not found"),
        @ApiResponse(code = 405, message = "Validation exception") })
    @RequestMapping(value = "/skill",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.PUT)
    default ResponseEntity<List<Skill>> updateSkill(@ApiParam(value = "" ,required=true )  @Valid @RequestBody Skill name) {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("application/json")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("[ {  \"study\" : 6.027456183070403,  \"name\" : \"Java\",  \"progress\" : 1.4658129805029452,  \"id\" : 0}, {  \"study\" : 6.027456183070403,  \"name\" : \"Java\",  \"progress\" : 1.4658129805029452,  \"id\" : 0} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type application/json", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default SkillApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }

}
