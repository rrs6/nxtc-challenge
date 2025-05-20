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
        Optional<Contact> checkContact = this.contactRepository.findByCellphone(contact.cellphone());
        if(checkContact.isEmpty()){
            Contact newContact = new Contact();
            newContact.setActive(true);
            newContact.setFavorite(false);
            newContact.setName(contact.name());
            newContact.setCellphone(contact.cellphone());
            newContact.setTelephone(contact.telephone());
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
            contact.setName(info.name().isEmpty() ? contact.getName() : info.name().get());
            contact.setEmail(info.email().isEmpty() ? contact.getEmail() : info.email().get());
            contact.setCellphone(info.cellphone().isEmpty() ? contact.getCellphone() : info.cellphone().get());
            contact.setTelephone(info.telephone().isEmpty() ? contact.getTelephone() : info.telephone().get());
            contact.setActive(info.active().isEmpty() ? contact.isActive() : info.active().get());
            contact.setFavorite(info.favorite().isEmpty() ? contact.isFavorite() : info.favorite().get());
            return this.contactRepository.save(contact);
        }
        return contact;
    }
}
