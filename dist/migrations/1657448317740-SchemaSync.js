"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaSync1657448317740 = void 0;
class SchemaSync1657448317740 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description" character varying`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`, undefined);
    }
}
exports.SchemaSync1657448317740 = SchemaSync1657448317740;
//# sourceMappingURL=1657448317740-SchemaSync.js.map