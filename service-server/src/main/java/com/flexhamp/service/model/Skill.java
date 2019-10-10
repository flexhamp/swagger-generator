package com.flexhamp.service.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Skill
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-10-10T21:24:56.798+07:00")

public class Skill   {
  @JsonProperty("id")
  private Long id = null;

  @JsonProperty("name")
  private String name = null;

  @JsonProperty("study")
  private Float study = null;

  @JsonProperty("progress")
  private Float progress = null;

  public Skill id(Long id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Skill name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(example = "Java", required = true, value = "")
  @NotNull


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Skill study(Float study) {
    this.study = study;
    return this;
  }

  /**
   * Get study
   * @return study
  **/
  @ApiModelProperty(value = "")


  public Float getStudy() {
    return study;
  }

  public void setStudy(Float study) {
    this.study = study;
  }

  public Skill progress(Float progress) {
    this.progress = progress;
    return this;
  }

  /**
   * Get progress
   * @return progress
  **/
  @ApiModelProperty(value = "")


  public Float getProgress() {
    return progress;
  }

  public void setProgress(Float progress) {
    this.progress = progress;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Skill skill = (Skill) o;
    return Objects.equals(this.id, skill.id) &&
        Objects.equals(this.name, skill.name) &&
        Objects.equals(this.study, skill.study) &&
        Objects.equals(this.progress, skill.progress);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, study, progress);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Skill {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    study: ").append(toIndentedString(study)).append("\n");
    sb.append("    progress: ").append(toIndentedString(progress)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

