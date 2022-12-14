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
import { Email } from './email.entity';
import { Phone } from './phone.entity';
import { User } from './user.entity';

@Entity()
export class Client {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.clients)
  user: User;

  @OneToMany(() => Email, (email) => email.client, { eager: true, onDelete: 'CASCADE' })
  emails: Email[];

  @OneToMany(() => Phone, (phone) => phone.client, { eager: true, onDelete: 'CASCADE' })
  phones: Phone[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
