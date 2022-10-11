import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Contact } from './contact.entity';

@Entity()
export class Phone {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ type: 'varchar', length: 50, unique: false })
  phone_number: string;

  @ManyToOne(() => Contact, (contact) => contact.phones)
  contact: Contact;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
