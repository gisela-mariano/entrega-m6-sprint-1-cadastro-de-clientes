import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Contact } from "./contact.entity";


@Entity()
export class Client{

  @PrimaryColumn('uuid')
  readonly id: string

  @Column({type: "varchar", length:255, unique: true})
  fullName: string

  @Column({type: "varchar", length:255})
  createdAt: string

  @OneToOne(() => Contact, {
    eager: true
  })@JoinColumn()
  contact: Contact

  constructor() {

    if(!this.id) {
        this.id = uuidv4()
    }
  }
}