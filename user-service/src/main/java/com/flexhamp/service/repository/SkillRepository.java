package com.flexhamp.service.repository;

import com.flexhamp.service.model.Skill;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface SkillRepository {
    void create(Skill skill) throws SQLException;

    void update(Skill skill) throws SQLException;

    void delete(Long id) throws SQLException;

    List<Skill> findAll() throws SQLException;

    Skill get(Long id);
}
