import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669392277782 implements MigrationInterface {
    name = 'default1669392277782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "meetingsId" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "meetings" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1d8a9bed86d0625e1f809ff56af" FOREIGN KEY ("meetingsId") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meetings" ADD CONSTRAINT "FK_4b70ab8832f1d7f9a7387d14307" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" DROP CONSTRAINT "FK_4b70ab8832f1d7f9a7387d14307"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1d8a9bed86d0625e1f809ff56af"`);
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
