import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Client } from './client.entity';

@Entity()
export class Email {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ type: 'varchar', length: 255, unique: false })
  email: string;

  @ManyToOne(() => Client, (client) => client.emails, { onDelete: 'CASCADE' })
  client: Client;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
