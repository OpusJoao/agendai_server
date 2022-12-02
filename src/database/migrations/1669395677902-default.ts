import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669395677902 implements MigrationInterface {
    name = 'default1669395677902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "day"`);
        await queryRunner.query(`ALTER TABLE "meetings" ADD "day" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "day"`);
        await queryRunner.query(`ALTER TABLE "meetings" ADD "day" TIMESTAMP NOT NULL`);
    }

}
