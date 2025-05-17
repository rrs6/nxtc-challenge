package com.nxtc.nxtc_api.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nxtc.nxtc_api.dtos.ChangeContactInfoDTO;
import com.nxtc.nxtc_api.dtos.CreateContactDTO;
import com.nxtc.nxtc_api.entities.Contact;
import com.nxtc.nxtc_api.repositories.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public Contact createNewContact(CreateContactDTO contact) {
        Optional<Contact> checkContact = this.contactRepository.findByCelular(contact.celular());
        if(checkContact.isEmpty()){
            Contact newContact = new Contact();
            newContact.setAtivo(true);
            newContact.setFavorito(false);
            newContact.setNome(contact.nome());
            newContact.setCelular(contact.celular());
            newContact.setTelefone(contact.telefone());
            newContact.setEmail(contact.email());
            return this.contactRepository.save(newContact);
        }
        return null;
    }

    public Contact getContactById(long id) {
        Optional<Contact> checkContact = this.contactRepository.findById(id);
        if(checkContact.isEmpty())
            return null;
        return checkContact.get();
    }

    public Contact[] getAllContacts() {
        return this.contactRepository.findAll().toArray(Contact[]::new);
    }

    public Contact changeSomeContactInfo(long id, ChangeContactInfoDTO info) {
        Contact contact = this.getContactById(id);
        if(!(contact == null)){
            contact.setNome(info.name().isEmpty() ? contact.getNome() : info.name().get());
            contact.setEmail(info.email().isEmpty() ? contact.getEmail() : info.email().get());
            contact.setCelular(info.cellphone().isEmpty() ? contact.getCelular() : info.cellphone().get());
            contact.setTelefone(info.telephone().isEmpty() ? contact.getTelefone() : info.telephone().get());
            contact.setAtivo(info.active().isEmpty() ? contact.isAtivo() : info.active().get());
            contact.setFavorito(info.favorite().isEmpty() ? contact.isFavorito() : info.favorite().get());
            return this.contactRepository.save(contact);
        }
        return contact;
    }
}
