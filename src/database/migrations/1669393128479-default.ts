import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669393128479 implements MigrationInterface {
    name = 'default1669393128479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1d8a9bed86d0625e1f809ff56af"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "meetingsId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "meetingsId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1d8a9bed86d0625e1f809ff56af" FOREIGN KEY ("meetingsId") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
