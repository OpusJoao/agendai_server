import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669494797758 implements MigrationInterface {
    name = 'default1669494797758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hoursAvailabe" ADD "hour" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hoursAvailabe" ADD "selected" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hoursAvailabe" ADD "meetingId" integer`);
        await queryRunner.query(`ALTER TABLE "hoursAvailabe" ADD CONSTRAINT "FK_307a6d6f2624a090c904f2ae060" FOREIGN KEY ("meetingId") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hoursAvailabe" DROP CONSTRAINT "FK_307a6d6f2624a090c904f2ae060"`);
        await queryRunner.query(`ALTER TABLE "hoursAvailabe" DROP COLUMN "meetingId"`);
        await queryRunner.query(`ALTER TABLE "hoursAvailabe" DROP COLUMN "selected"`);
        await queryRunner.query(`ALTER TABLE "hoursAvailabe" DROP COLUMN "hour"`);
    }

}
