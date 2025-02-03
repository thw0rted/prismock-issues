-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApprovalType" (
    "name" TEXT NOT NULL,

    CONSTRAINT "ApprovalType_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Widget" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Widget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ApprovalTypeToUser" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ApprovalTypeToWidget" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ApprovalTypeToUser_AB_unique" ON "_ApprovalTypeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ApprovalTypeToUser_B_index" ON "_ApprovalTypeToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ApprovalTypeToWidget_AB_unique" ON "_ApprovalTypeToWidget"("A", "B");

-- CreateIndex
CREATE INDEX "_ApprovalTypeToWidget_B_index" ON "_ApprovalTypeToWidget"("B");

-- AddForeignKey
ALTER TABLE "_ApprovalTypeToUser" ADD CONSTRAINT "_ApprovalTypeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ApprovalType"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApprovalTypeToUser" ADD CONSTRAINT "_ApprovalTypeToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApprovalTypeToWidget" ADD CONSTRAINT "_ApprovalTypeToWidget_A_fkey" FOREIGN KEY ("A") REFERENCES "ApprovalType"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApprovalTypeToWidget" ADD CONSTRAINT "_ApprovalTypeToWidget_B_fkey" FOREIGN KEY ("B") REFERENCES "Widget"("id") ON DELETE CASCADE ON UPDATE CASCADE;
