import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669390612809 implements MigrationInterface {
    name = 'default1669390612809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "startTime"`);
        await queryRunner.query(`ALTER TABLE "meetings" ADD "startTime" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "endTime"`);
        await queryRunner.query(`ALTER TABLE "meetings" ADD "endTime" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "endTime"`);
        await queryRunner.query(`ALTER TABLE "meetings" ADD "endTime" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "startTime"`);
        await queryRunner.query(`ALTER TABLE "meetings" ADD "startTime" TIMESTAMP NOT NULL`);
    }

}
