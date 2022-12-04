import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669999359923 implements MigrationInterface {
    name = 'default1669999359923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" ADD "code" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "code"`);
    }

}
