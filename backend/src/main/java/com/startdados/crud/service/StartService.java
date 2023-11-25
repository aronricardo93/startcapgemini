package com.startdados.crud.service;

import com.startdados.crud.dto.StartDto;
import com.startdados.crud.repository.StartRepository;
import com.startdados.crud.entity.Start;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StartService {

    @Autowired
    StartRepository startRepository;

    public List<Start> list(){
        return startRepository.findAll();
    }

    public Optional<Start> getById(Long id){
        return startRepository.findById(id);
    }

    public Optional<Start> getByNome(String nome){
        return startRepository.findByNome(nome);
    }

    public void save(StartDto startDto){
        Start start = new Start(startDto.nome(), startDto.stack(), startDto.regiao());

        startRepository.save(start);
    }

    public void update(Long id, StartDto startDto){
        if (existsById(id)){
            Start originalStart = this.getById(id).get();
            var newStart = new Start();

            BeanUtils.copyProperties(startDto, newStart);

            newStart.setId(originalStart.getId());

            startRepository.save(newStart);
        }
    }

    public void deleteById(Long id){
        startRepository.deleteById(id);
    }

    public boolean existsById(Long id){
        return startRepository.existsById(id);
    }

    public boolean existsByNome(String nome){
        return startRepository.existsByNome(nome);
    }
}
