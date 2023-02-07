/*
  Warnings:

  - Added the required column `duration` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatyoulearn` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `why` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Roadmap` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "whatyoulearn" TEXT NOT NULL,
ADD COLUMN     "why" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "duration" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Roadmap" ADD COLUMN     "icon" TEXT NOT NULL;
