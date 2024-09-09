import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

describe("My issues", () => {
  test("No default uuid on creation", async () => {
    const fooCuid = await prisma.fooCuid.create({
      data: {
        name: "foo",
      },
      select: {
        id: true,
        name: true,
      },
    });

    // OK
    expect(fooCuid.id).toBeDefined();

    const fooUuid = await prisma.fooUuid.create({
      data: {
        name: "foo",
      },
      select: {
        id: true,
        name: true,
      },
    });

    // KO
    expect(fooUuid.id).toBeDefined();
  });

  test("No ", async () => {
    try {
      await prisma.fooCuid.findUniqueOrThrow({
        where: {
          id: "foo",
        },
        select: {
          id: true,
          name: true,
        },
      });
      throw new Error("Find should fail");
    } catch (e) {
      // KO
      expect(e).toBeInstanceOf(PrismaClientKnownRequestError);
      // @ts-ignore
      expect(e.code).toBe("P2025");
    }
  });
});
