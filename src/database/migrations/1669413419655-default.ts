import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669413419655 implements MigrationInterface {
    name = 'default1669413419655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" ADD "timeDuration" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "timeDuration"`);
    }

}
