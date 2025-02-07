package com.generation.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tb_produto")
public class ProdutoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O atributo NOME é Obrigatório!") 
	@Size(min = 2, max = 200, message = "O atributo título deve conter no mínimo 02 e no máximo 200 caracteres")
    private String nome;

    private BigDecimal preco;

    @ManyToOne
    @JoinColumn(name = "categoria_id", referencedColumnName = "id")
    @JsonIgnoreProperties("produtos")
    private CategoriaModel categoria;

    @NotBlank(message = "O atributo PLATAFORMA é Obrigatório!")
	@Size(min = 2, max = 50, message = "O atributo PLATAFORMA deve conter no mínimo 2 e no máximo 50 caracteres")
    private String plataforma;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataLancamento;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public CategoriaModel getCategoria() {
        return categoria;
    }

    public void setCategoria(CategoriaModel categoria) {
        this.categoria = categoria;
    }

    public String getPlataforma() {
        return plataforma;
    }

    public void setPlataforma(String plataforma) {
        this.plataforma = plataforma;
    }

    public LocalDate getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(LocalDate dataLancamento) {
        this.dataLancamento = dataLancamento;
    }
}
