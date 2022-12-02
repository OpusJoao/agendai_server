import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669389872748 implements MigrationInterface {
    name = 'default1669389872748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "meetings" ("id" SERIAL NOT NULL, "name" text NOT NULL, "day" TIMESTAMP NOT NULL, "startTime" TIMESTAMP NOT NULL, "endTime" TIMESTAMP NOT NULL, "link" text NOT NULL, "isUniqueUse" boolean NOT NULL DEFAULT false, "isValid" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_aa73be861afa77eb4ed31f3ed57" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "meetings"`);
    }

}
