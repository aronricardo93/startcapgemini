package com.startdados.crud.repository;

import com.startdados.crud.entity.Start;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StartRepository extends JpaRepository<Start, Long> {
    boolean existsByNome(String nome);
    Optional<Start> findByNome(String nome);
}
