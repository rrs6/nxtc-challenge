package com.nxtc.nxtc_api.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nxtc.nxtc_api.entities.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    public Optional<Contact> findByCellphone(String celular);
    public Optional<Contact> findById(long id);
}
