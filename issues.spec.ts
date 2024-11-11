import { PrismaClient } from "@prisma/client";
import type { PrismockClient } from "prismock";

const prisma = new PrismaClient();

describe("My issues", () => {
  beforeEach(() => {
    (prisma as unknown as typeof PrismockClient).reset();
  });

  it('creates then updates', async () => {
    const old = await prisma.fooInt.create({
      data: {name: 'abc'},
    })

    expect(old.name).toBe('abc');

    const upd = await prisma.fooInt.update({
      where: {id: old.id},
      data: {name: 'xyz'}
    })

    expect(upd.name).toBe('xyz');
  })

  it('creates then updates', async () => {
    const old = await prisma.fooInt.create({
      data: {name: 'abc'},
    })

    expect(old.name).toBe('abc');

    await expect(prisma.fooInt.update({
      where: {id: 9999},
      data: {name: 'xyz'}
    })).rejects.toThrow(/not found/);
  })
});
