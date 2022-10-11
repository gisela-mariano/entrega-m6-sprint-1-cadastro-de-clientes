import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Contact } from './contact.entity';
import { User } from './user.entity';

@Entity()
export class Client {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  createdAt: string;

  @OneToOne(() => Contact, {
    eager: true,
  })
  @JoinColumn()
  contact: Contact;

  // @ManyToMany(() => User, {eager: true})
  // @JoinTable()
  // users: User

  @ManyToOne(() => User, (user) => user.clients)
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
