import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Phone {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  phone_number: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
