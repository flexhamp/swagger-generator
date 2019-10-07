package com.flexhamp.service.service;

import com.flexhamp.service.model.Skill;
import com.flexhamp.service.repository.TestRepository;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapperResultSetExtractor;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class TestService implements TestRepository {
    private static final String URL = "jdbc:h2:mem:testdb";
    private static final String USER = "sa";
    private static final String PASSWORD = "";

    private static final String SKILL_DB = "SKILL_DB";
    private final ResultSetExtractor<List<Skill>> entitySkillRowMapper;



    public TestService() {
        entitySkillRowMapper = new RowMapperResultSetExtractor<>((rs, rowNum) -> {
            Skill skill = new Skill();
            skill.setId(rs.getLong("ID"));
            skill.setName(rs.getString("NAME"));
            return skill;
        });
    }

    private void execute(String query) {
        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD); Statement statement = connection.createStatement()) {
            int a = statement.executeUpdate(query);
            System.out.println(a);
        } catch (SQLException ignored) {
        }
    }

    @Override
    public void create(Skill skill) {
        System.out.println("--->" + skill.getName());
        String query = "INSERT INTO " + SKILL_DB + " VALUES (default, '"+ skill.getName() + "')";
        execute(query);
    }

    @Override
    public void update(Skill skill) {
        String query = "";
        execute(query);
    }

    @Override
    public void delete(long skillId) {
        String query = "";
        execute(query);
    }

    @Override
    public List<Skill> findAll() {
        List<Skill> skills = new ArrayList<>();
        String query = "SELECT * FROM " + SKILL_DB;
        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD); Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery(query);
            skills.addAll(entitySkillRowMapper.extractData(resultSet));
            System.out.println("---------------------------");
        } catch (SQLException ignored) {
            System.out.println(ignored.getMessage());
        }
        return skills;
    }

    @Override
    public Skill get(long id) {
        String query = "SELECT * FROME skill_tb WHERE ID=" + id;
        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD); Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery(query);
            System.out.println(resultSet);
        } catch (SQLException ignored) {
        }
        return null;
    }
}
