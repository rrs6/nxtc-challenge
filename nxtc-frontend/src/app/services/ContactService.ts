import { Injectable } from "@angular/core";
import { HttpService } from "./HttpService";
import { Contact } from "../models/Contact";

@Injectable({providedIn: "root"})
export class ContactService {
    constructor(private httpService: HttpService) {}

    public getAllContact(): Contact[] {
        let allContacts: Contact[] = [];
        this.httpService.get('contact').subscribe((contacts) => allContacts = contacts as Contact[]);
        return allContacts;
    }


}