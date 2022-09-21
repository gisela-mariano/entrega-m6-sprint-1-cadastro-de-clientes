import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1663781790914 implements MigrationInterface {
    name = 'createTables1663781790914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "email" ("id" uuid NOT NULL, "email" character varying(255) NOT NULL, CONSTRAINT "UQ_fee9013b697946e8129caba8983" UNIQUE ("email"), CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phone" ("id" uuid NOT NULL, "phone_number" character varying(50) NOT NULL, CONSTRAINT "UQ_1199df878885594d633a211cf1d" UNIQUE ("phone_number"), CONSTRAINT "PK_f35e6ee6c1232ce6462505c2b25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL, "fullName" character varying(255) NOT NULL, "createdAt" character varying(255) NOT NULL, "contactId" uuid, CONSTRAINT "UQ_20c34cf5c42dcbaaaeaef34c654" UNIQUE ("fullName"), CONSTRAINT "REL_cc959b5564b04c05e45da86075" UNIQUE ("contactId"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact_phones_phone" ("contactId" uuid NOT NULL, "phoneId" uuid NOT NULL, CONSTRAINT "PK_9e5eafc38651e31362624ae9f13" PRIMARY KEY ("contactId", "phoneId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8eccd829e89763919722127a78" ON "contact_phones_phone" ("contactId") `);
        await queryRunner.query(`CREATE INDEX "IDX_10ca5a453ce9d6ec6c6d2833cc" ON "contact_phones_phone" ("phoneId") `);
        await queryRunner.query(`CREATE TABLE "contact_emails_email" ("contactId" uuid NOT NULL, "emailId" uuid NOT NULL, CONSTRAINT "PK_30d92c5124ed5e6a1f142015472" PRIMARY KEY ("contactId", "emailId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8ad4ba794c533769e2518eddbf" ON "contact_emails_email" ("contactId") `);
        await queryRunner.query(`CREATE INDEX "IDX_99ba4445dc4dafefb42df1e403" ON "contact_emails_email" ("emailId") `);
        await queryRunner.query(`CREATE TABLE "user_clients_client" ("userId" uuid NOT NULL, "clientId" uuid NOT NULL, CONSTRAINT "PK_306238c4527c18362c21984d70f" PRIMARY KEY ("userId", "clientId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f98a43898f2a843e854d38d001" ON "user_clients_client" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b86159314264014ce53890f1d1" ON "user_clients_client" ("clientId") `);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_cc959b5564b04c05e45da86075f" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact_phones_phone" ADD CONSTRAINT "FK_8eccd829e89763919722127a782" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "contact_phones_phone" ADD CONSTRAINT "FK_10ca5a453ce9d6ec6c6d2833cc5" FOREIGN KEY ("phoneId") REFERENCES "phone"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "contact_emails_email" ADD CONSTRAINT "FK_8ad4ba794c533769e2518eddbf5" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "contact_emails_email" ADD CONSTRAINT "FK_99ba4445dc4dafefb42df1e4037" FOREIGN KEY ("emailId") REFERENCES "email"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_clients_client" ADD CONSTRAINT "FK_f98a43898f2a843e854d38d001e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_clients_client" ADD CONSTRAINT "FK_b86159314264014ce53890f1d1c" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_clients_client" DROP CONSTRAINT "FK_b86159314264014ce53890f1d1c"`);
        await queryRunner.query(`ALTER TABLE "user_clients_client" DROP CONSTRAINT "FK_f98a43898f2a843e854d38d001e"`);
        await queryRunner.query(`ALTER TABLE "contact_emails_email" DROP CONSTRAINT "FK_99ba4445dc4dafefb42df1e4037"`);
        await queryRunner.query(`ALTER TABLE "contact_emails_email" DROP CONSTRAINT "FK_8ad4ba794c533769e2518eddbf5"`);
        await queryRunner.query(`ALTER TABLE "contact_phones_phone" DROP CONSTRAINT "FK_10ca5a453ce9d6ec6c6d2833cc5"`);
        await queryRunner.query(`ALTER TABLE "contact_phones_phone" DROP CONSTRAINT "FK_8eccd829e89763919722127a782"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_cc959b5564b04c05e45da86075f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b86159314264014ce53890f1d1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f98a43898f2a843e854d38d001"`);
        await queryRunner.query(`DROP TABLE "user_clients_client"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_99ba4445dc4dafefb42df1e403"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8ad4ba794c533769e2518eddbf"`);
        await queryRunner.query(`DROP TABLE "contact_emails_email"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_10ca5a453ce9d6ec6c6d2833cc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8eccd829e89763919722127a78"`);
        await queryRunner.query(`DROP TABLE "contact_phones_phone"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "phone"`);
        await queryRunner.query(`DROP TABLE "email"`);
    }

}
