import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624726462062 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}





