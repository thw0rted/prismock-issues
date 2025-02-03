-- CreateTable
CREATE TABLE "_UserToWidget" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToWidget_AB_unique" ON "_UserToWidget"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToWidget_B_index" ON "_UserToWidget"("B");

-- AddForeignKey
ALTER TABLE "_UserToWidget" ADD CONSTRAINT "_UserToWidget_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWidget" ADD CONSTRAINT "_UserToWidget_B_fkey" FOREIGN KEY ("B") REFERENCES "Widget"("id") ON DELETE CASCADE ON UPDATE CASCADE;
