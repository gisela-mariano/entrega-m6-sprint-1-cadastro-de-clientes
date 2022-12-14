import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Client } from './client.entity';

@Entity()
export class User {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  // @ManyToMany(() => Client, {eager: true})
  // @JoinTable()
  // clients: Client[]

  @OneToMany(() => Client, (client) => client.user, { eager: true })
  clients: Client[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
