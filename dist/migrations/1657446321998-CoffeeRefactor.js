"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeRefactor1657446321998 = void 0;
class CoffeeRefactor1657446321998 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }
}
exports.CoffeeRefactor1657446321998 = CoffeeRefactor1657446321998;
//# sourceMappingURL=1657446321998-CoffeeRefactor.js.map