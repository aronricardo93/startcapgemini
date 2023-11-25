package com.startdados.crud.controller;

import com.startdados.crud.dto.StartDto;
import com.startdados.crud.entity.Start;
import com.startdados.crud.service.StartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/start")
@CrossOrigin(origins = "*")
public class StartController {

    @Autowired
    private StartService startService;

    @GetMapping("/list")
    public ResponseEntity<List<Start>> list(){
        List<Start> starts = startService.list();
        return new ResponseEntity(starts, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable("id") Long id){
        if (!startService.existsById(id))
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id " + id + " inexistente!");

        Optional<Start> start = startService.getById(id);
        return new ResponseEntity(start, HttpStatus.OK);
    }
    @GetMapping("/name/{nome}")
    public ResponseEntity<Object> getById(@PathVariable("nome") String nome){
        if (startService.getByNome(nome).isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Start não encontrado!");

        Optional<Start> start = startService.getByNome(nome);
        return new ResponseEntity(start, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody StartDto startDto){
        if (startService.existsByNome(startDto.nome()))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cadastro já existente!");
        if (StringUtils.isEmpty(startDto.nome()))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O campo nome não pode ser vazio!");
        if (StringUtils.isEmpty(startDto.stack()))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O campo stack não pode ser vazio!");
        if (StringUtils.isEmpty(startDto.regiao()))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O campo região não pode ser vazio!");
        if (startService.existsByNome(startDto.nome()))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Start já cadastrado!");

        startService.save(startDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable("id") Long id, @RequestBody StartDto startDto){
        if (!startService.existsById(id))
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id " + id + " inexistente!");
        if (StringUtils.isEmpty(startDto.nome()))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O campo nome não pode ser vazio!");
        if (StringUtils.isEmpty(startDto.stack()))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O campo stack não pode ser vazio!");
        if (StringUtils.isEmpty(startDto.regiao()))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O campo região não pode ser vazio!");

        startService.update(id,startDto);

        return ResponseEntity.ok("Atualizado com sucesso!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        if (!startService.existsById(id))
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id " + id + " inexistente!");
        startService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
