package com.nxtc.nxtc_api.repositories;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.nxtc.nxtc_api.entities.Contact;

@DataJpaTest
public class ContactRepositoryTest {

    @Autowired
    private ContactRepository contactRepository;

    @Test
    @DisplayName("Deve salvar e buscar contato por cellphone")
    void shouldSaveAndFindByCellphone() {
        // Criação do contato
        Contact contact = new Contact();
        contact.setName("Teste 1");  // Nome correto
        contact.setEmail("test@test.com");
        contact.setTelephone("987654321");
        contact.setCellphone("123456789");
        contact.setActive(false);
        contact.setFavorite(true);
        
        // Salvando no repositório
        contactRepository.save(contact);
        
        // Buscando pelo celular
        Optional<Contact> found = contactRepository.findByCellphone("123456789");

        // Assert
        assertThat(found).isPresent();
        assertThat(found.get().getName()).isEqualTo("Teste 1");  // Verifique o nome correto
    }
}
