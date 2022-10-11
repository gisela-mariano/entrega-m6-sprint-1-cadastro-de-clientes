import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Contact } from './contact.entity';

@Entity()
export class Email {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ type: 'varchar', length: 255, unique: false })
  email: string;

  @ManyToOne(() => Contact, (contact) => contact.emails)
  contact: Contact;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
