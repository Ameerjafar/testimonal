-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);
