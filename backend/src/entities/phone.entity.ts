import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Client } from './client.entity';

@Entity()
export class Phone {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ type: 'varchar', length: 50, unique: false })
  phone_number: string;

  @ManyToOne(() => Client, (client) => client.phones, { onDelete: 'CASCADE' })
  client: Client;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
