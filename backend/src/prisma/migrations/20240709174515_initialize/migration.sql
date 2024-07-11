-- CreateTable
CREATE TABLE "DashBoard" (
    "Id" SERIAL NOT NULL,
    "spaceName" TEXT NOT NULL,
    "headerTitle" TEXT NOT NULL,
    "customMessage" TEXT NOT NULL,
    "Question1" TEXT NOT NULL,
    "Question2" TEXT NOT NULL,
    "Question3" TEXT NOT NULL,

    CONSTRAINT "DashBoard_pkey" PRIMARY KEY ("Id")
);
