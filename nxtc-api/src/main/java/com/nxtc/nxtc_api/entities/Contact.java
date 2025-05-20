package com.nxtc.nxtc_api.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="contato")
@Getter
@Setter
@AllArgsConstructor
public class Contact {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="contato_id")
    private long id;

    @Column(name="contato_nome")
    private String name;

    @Column(name="contato_email")
    private String email;

    @Column(name="contato_celular")
    private String cellphone;

    @Column(name="contato_telefone")
    private String telephone;

    @Column(name="contato_sn_favorito")
    private boolean favorite;

    @Column(name="contato_sn_ativo")
    private boolean active;

    @Column(name="contato_dh_cad")
    private Date createdAt;

    public Contact() {
        this.createdAt = new Date();
    }
}
