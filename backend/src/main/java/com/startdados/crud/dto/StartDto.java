package com.startdados.crud.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;

public record StartDto(@NotBlank String nome, @NotBlank String stack,@Max(2) String regiao) {}