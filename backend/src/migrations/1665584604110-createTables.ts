import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1665584604110 implements MigrationInterface {
    name = 'createTables1665584604110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "email" ("id" uuid NOT NULL, "email" character varying(255) NOT NULL, "clientId" uuid, CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phone" ("id" uuid NOT NULL, "phone_number" character varying(50) NOT NULL, "clientId" uuid, CONSTRAINT "PK_f35e6ee6c1232ce6462505c2b25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL, "name" character varying(255) NOT NULL, "createdAt" character varying(255) NOT NULL, "userId" uuid, CONSTRAINT "UQ_480f88a019346eae487a0cd7f0c" UNIQUE ("name"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_e80b16841aa5c3b215676efbed1" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phone" ADD CONSTRAINT "FK_4186ea1a6388347b12c2126e938" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_ad3b4bf8dd18a1d467c5c0fc13a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_ad3b4bf8dd18a1d467c5c0fc13a"`);
        await queryRunner.query(`ALTER TABLE "phone" DROP CONSTRAINT "FK_4186ea1a6388347b12c2126e938"`);
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_e80b16841aa5c3b215676efbed1"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "phone"`);
        await queryRunner.query(`DROP TABLE "email"`);
    }

}
