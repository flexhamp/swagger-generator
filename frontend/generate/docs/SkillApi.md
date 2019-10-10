# CodegenSkillsApi.SkillApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSkill**](SkillApi.md#createSkill) | **POST** /skill | Creates a new skill
[**deleteSkill**](SkillApi.md#deleteSkill) | **DELETE** /skill | Deletes a skill
[**getSkillById**](SkillApi.md#getSkillById) | **GET** /skill/{skillId} | Find skill by ID
[**getSkills**](SkillApi.md#getSkills) | **GET** /skill | Gets a list of skill
[**updateSkill**](SkillApi.md#updateSkill) | **PUT** /skill | Update an existing skill


<a name="createSkill"></a>
# **createSkill**
> [Skill] createSkill(opts)

Creates a new skill

### Example
```javascript
var CodegenSkillsApi = require('codegen-skills-api');

var apiInstance = new CodegenSkillsApi.SkillApi();

var opts = { 
  'skill': new CodegenSkillsApi.Skill() // Skill | The skill data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSkill(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill** | [**Skill**](Skill.md)| The skill data | [optional] 

### Return type

[**[Skill]**](Skill.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSkill"></a>
# **deleteSkill**
> [Skill] deleteSkill(skillId)

Deletes a skill



### Example
```javascript
var CodegenSkillsApi = require('codegen-skills-api');

var apiInstance = new CodegenSkillsApi.SkillApi();

var skillId = 789; // Number | Skill id to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteSkill(skillId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skillId** | **Number**| Skill id to delete | 

### Return type

[**[Skill]**](Skill.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSkillById"></a>
# **getSkillById**
> Skill getSkillById(skillId)

Find skill by ID

Returns a single skill

### Example
```javascript
var CodegenSkillsApi = require('codegen-skills-api');

var apiInstance = new CodegenSkillsApi.SkillApi();

var skillId = 789; // Number | ID of skill to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSkillById(skillId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skillId** | **Number**| ID of skill to return | 

### Return type

[**Skill**](Skill.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSkills"></a>
# **getSkills**
> [Skill] getSkills()

Gets a list of skill



### Example
```javascript
var CodegenSkillsApi = require('codegen-skills-api');

var apiInstance = new CodegenSkillsApi.SkillApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSkills(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Skill]**](Skill.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="updateSkill"></a>
# **updateSkill**
> [Skill] updateSkill(name)

Update an existing skill



### Example
```javascript
var CodegenSkillsApi = require('codegen-skills-api');

var apiInstance = new CodegenSkillsApi.SkillApi();

var name = new CodegenSkillsApi.Skill(); // Skill | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSkill(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**Skill**](Skill.md)|  | 

### Return type

[**[Skill]**](Skill.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

