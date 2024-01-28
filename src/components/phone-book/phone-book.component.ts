import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { Contact } from '../../interfaces/models/contact';
import { ContactsService } from '../../services/contacts/contacts.service';
import { NamePipe } from '../../pipes/name/name.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css'],
  standalone: true,
  imports: [NamePipe, CommonModule],
  providers: [ContactsService, NamePipe],
})
export class PhoneBookComponent {
  constructor(private contactsService: ContactsService) {}
  public contacts: Observable<Contact[]> = this.contactsService
    .findAll()
    .pipe(takeUntilDestroyed());
}
