import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669922972073 implements MigrationInterface {
    name = 'default1669922972073'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hoursAvailable" ("id" SERIAL NOT NULL, "hour" text NOT NULL, "selected" boolean NOT NULL DEFAULT false, "meetingId" integer, CONSTRAINT "PK_606f17fafaf21dd988c209a5880" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "hoursAvailable" ADD CONSTRAINT "FK_59c185a9bfd78ca5766a501f0bb" FOREIGN KEY ("meetingId") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hoursAvailable" DROP CONSTRAINT "FK_59c185a9bfd78ca5766a501f0bb"`);
        await queryRunner.query(`DROP TABLE "hoursAvailable"`);
    }

}
