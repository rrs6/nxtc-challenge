import { Injectable } from "@angular/core";
import { HttpService } from "./HttpService";
import { Contact } from "../models/Contact";
import { map, Observable } from "rxjs";
import { ContactDTO } from "../dtos/ContactDTO";

@Injectable({ providedIn: "root" })
export class ContactService {
    constructor(private httpService: HttpService) { }

    public getAllContact(): Observable<Contact[]> {
        return this.httpService.get<any[]>('contact').pipe(
            map(response =>
                response.map(
                    contact => new Contact(
                        contact.id,
                        contact.name,
                        contact.email,
                        contact.telephone,
                        contact.cellphone,
                        contact.favorite,
                        contact.active
                    )
                )
            )
        );
    }
    public createNewContact(contact: ContactDTO): Observable<number> {
        return this.httpService.post<number>('contact', contact);
    }

    public getContactById(id: string): Observable<ContactDTO> {
        return this.httpService.get(`contact/${id}`);
    }

    public editContactInfo(id: string, contact: ContactDTO): Observable<ContactDTO> {
        return this.httpService.put(`contact/${id}`, contact);
    }
}