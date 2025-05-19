package com.nxtc.nxtc_api.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nxtc.nxtc_api.dtos.ChangeContactInfoDTO;
import com.nxtc.nxtc_api.dtos.CreateContactDTO;
import com.nxtc.nxtc_api.entities.Contact;
import com.nxtc.nxtc_api.services.ContactService;



@RestController
@RequestMapping("/contact")
public class ContactController {
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<String> postMethodName(@RequestBody CreateContactDTO contact) {
        Contact contact1 = this.contactService.createNewContact(contact);
        if(contact1 == null)
            return new ResponseEntity<>("There is already a contact with this telephone number.", HttpStatus.CONFLICT);
        return new ResponseEntity<>(String.valueOf(contact1.getId()), HttpStatus.OK);
    }
    
    @GetMapping("{contact_id}")
    public ResponseEntity<Object> getContactById(@PathVariable(name="contact_id") long id) {
        Contact contact = this.contactService.getContactById(id);
        if(contact == null) 
            return new ResponseEntity<>(String.format("Contact with id %d doesn't exist", id), HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }
    
    @GetMapping()
    public Contact[] getContacts(@RequestParam(required=false) String active, @RequestParam(required=false) String name, @RequestParam(required=false) String email, @RequestParam(required=false) String favorite) {
        Contact[] contacts = this.contactService.getAllContacts();
        return contacts;
    }

    @PutMapping("{contact_id}")
    public ResponseEntity<Object> changeContactInfo(@PathVariable(name="contact_id") long id, @RequestBody ChangeContactInfoDTO contact) {
        Contact contact1 = this.contactService.changeSomeContactInfo(id, contact);
        if(contact1 == null) 
            return new ResponseEntity<>(String.format("Contact with id %d doesn't exist", id), HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(contact1, HttpStatus.OK);
    }

}
