/**
 * User Service contract
 * This is a sample specification for user service
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CodegenSkillsApi);
  }
}(this, function(expect, CodegenSkillsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CodegenSkillsApi.Skill();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Skill', function() {
    it('should create an instance of Skill', function() {
      // uncomment below and update the code to test Skill
      //var instance = new CodegenSkillsApi.Skill();
      //expect(instance).to.be.a(CodegenSkillsApi.Skill);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CodegenSkillsApi.Skill();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CodegenSkillsApi.Skill();
      //expect(instance).to.be();
    });

    it('should have the property study (base name: "study")', function() {
      // uncomment below and update the code to test the property study
      //var instance = new CodegenSkillsApi.Skill();
      //expect(instance).to.be();
    });

    it('should have the property progress (base name: "progress")', function() {
      // uncomment below and update the code to test the property progress
      //var instance = new CodegenSkillsApi.Skill();
      //expect(instance).to.be();
    });

  });

}));