import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669416607202 implements MigrationInterface {
    name = 'default1669416607202'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hoursAvailabe" ("id" SERIAL NOT NULL, CONSTRAINT "PK_b303eba455cdcf254408636ec31" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "meetings" ALTER COLUMN "link" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" ALTER COLUMN "link" SET NOT NULL`);
        await queryRunner.query(`DROP TABLE "hoursAvailabe"`);
    }

}
