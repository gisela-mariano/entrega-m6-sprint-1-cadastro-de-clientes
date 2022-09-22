import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Email {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
