-- CreateTable
CREATE TABLE "FooCuid" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "FooCuid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FooUuid" (
    "id" UUID NOT NULL,
    "name" TEXT,

    CONSTRAINT "FooUuid_pkey" PRIMARY KEY ("id")
);
