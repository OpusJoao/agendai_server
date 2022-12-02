import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669495973666 implements MigrationInterface {
    name = 'default1669495973666'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hoursAvailabe" ALTER COLUMN "selected" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hoursAvailabe" ALTER COLUMN "selected" DROP DEFAULT`);
    }

}
