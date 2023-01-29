-- CreateEnum
CREATE TYPE "Category" AS ENUM ('SCIENCE_FICTION', 'ROMANCE', 'THRILLER', 'CHILDREN');

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "releasedAt" TIMESTAMP(3) NOT NULL,
    "categories" "Category"[],

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
