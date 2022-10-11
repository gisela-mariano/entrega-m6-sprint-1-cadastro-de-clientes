import { Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Email } from './email.entity';
import { Phone } from './phone.entity';

@Entity()
export class Contact {
  @PrimaryColumn('uuid')
  readonly id: string;

  // @ManyToMany(() => Phone, { eager: true })
  // @JoinTable()
  // phones: Phone[];

  // @ManyToMany(() => Email, { eager: true })
  // @JoinTable()
  // emails: Email[];

  @OneToMany(() => Email, (email) => email.contact, { eager: true })
  emails: Email[];

  @OneToMany(() => Phone, (phone) => phone.contact, { eager: true })
  phones: Phone[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
