package com.flexhamp.service.service;

import com.flexhamp.service.model.Skill;
import com.flexhamp.service.repository.SkillRepository;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapperResultSetExtractor;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class SkillService implements SkillRepository {
    private static final String URL = "jdbc:h2:mem:testdb";
    private static final String USER = "sa";
    private static final String PASSWORD = "";

    private static final String SKILL_DB = "SKILL_DB";
    private final ResultSetExtractor<List<Skill>> entitySkillRowMapper;


    public SkillService() {
        entitySkillRowMapper = new RowMapperResultSetExtractor<>((rs, rowNum) -> {
            Skill skill = new Skill();
            skill.setId(rs.getLong("ID"));
            skill.setName(rs.getString("NAME"));
            skill.setStudy(rs.getDouble("STUDY"));
            skill.setProgress(rs.getDouble("PROGRESS"));
            return skill;
        });
    }

    private void execute(String query) {
        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD); Statement statement = connection.createStatement()) {
            statement.execute(query);
        } catch (SQLException ignored) {
        }
    }

    @Override
    public void create(Skill skill) {
        Double study = skill.getStudy() != null ? skill.getStudy() : 0.0;
        Double progress = skill.getProgress() != null ? skill.getProgress() : 0.0;
        String query = "INSERT INTO " + SKILL_DB + " VALUES (default, '" + skill.getName() + "','" + study + "','" + progress + "')";
        execute(query);
    }

    @Override
    public void update(Skill skill) {
        Long id = skill.getId();
        String name = skill.getName();
        Double study = skill.getStudy() != null ? skill.getStudy() : 0.0;
        Double progress = skill.getProgress() != null ? skill.getProgress() : 0.0;


        System.out.println("SKILL FOR UPDATE: " + id + " " + name + " " + study + " " + progress);

        String query = "UPDATE " + SKILL_DB + " SET NAME='" + name + "', STUDY=" + study + ", PROGRESS=" + progress + " WHERE ID=" + id;
        System.out.println("QUERY: " + query);
        execute(query);
    }

    @Override
    public void delete(Long id) {
        String query = "DELETE FROM " + SKILL_DB + " WHERE ID=" + id;
        execute(query);
    }

    @Override
    public List<Skill> findAll() {
        List<Skill> skills = new ArrayList<>();
        String query = "SELECT * FROM " + SKILL_DB;
        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD); Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery(query);
            skills.addAll(Objects.requireNonNull(entitySkillRowMapper.extractData(resultSet)));
        } catch (SQLException ignored) {
            System.out.println(ignored.getMessage());
        }
        return skills;
    }

    @Override
    public Skill get(Long id) {
        String query = "SELECT * FROM " + SKILL_DB + " WHERE ID=" + id;
        Skill skill = new Skill();
        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD); Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery(query);
            skill = Objects.requireNonNull(entitySkillRowMapper.extractData(resultSet)).get(0);
        } catch (SQLException ignored) {
        }
        return skill;
    }
}
