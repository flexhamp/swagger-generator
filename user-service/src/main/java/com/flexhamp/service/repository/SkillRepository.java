package com.flexhamp.service.repository;

import com.flexhamp.service.domain.Skills;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends CrudRepository<Skills, Long> {
}
