package com.flexhamp.service.repository;

import com.flexhamp.service.model.Skill;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public interface TestRepository {
    void create(Skill skill) throws SQLException;

    void update(Skill skill) throws SQLException;

    void delete(long skillId) throws SQLException;

    List<Skill> findAll() throws SQLException;

    Skill get(long id);
}
