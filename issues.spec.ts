import { PrismaClient } from "@prisma/client";
import type { PrismockClient } from "prismock";

const prisma = new PrismaClient();

describe("My issues", () => {
  beforeEach(() => {
    (prisma as unknown as typeof PrismockClient).reset();
  });

  it('makes a widget when no approvals exist', async () => {
    const w = await prisma.widget.create({
      data:{
        name: 'thing',
        // requiredApprovals: {connect: {name: 'license'}},
      },
      include: {requiredApprovals: true},
    });
    expect(w.requiredApprovals).not.toContainEqual(expect.objectContaining({name:'license'}));
  });

  it('makes an approval, then a widget with no approvals', async () => {
    await prisma.approvalType.create({data:{name: 'license'}});

    const w = await prisma.widget.create({
      data:{
        name: 'thing',
      },
      include: {requiredApprovals: true},
    });
    expect(w.requiredApprovals).not.toContainEqual(expect.objectContaining({name:'license'}));
    expect(w.requiredApprovals.length).toBe(0);
  });

  it('makes a widget with an approval', async () => {
    await prisma.approvalType.create({data:{name: 'license'}});

    const w = await prisma.widget.create({
      data:{
        name: 'thing',
        requiredApprovals: {connect: {name: 'license'}},
      },
      include: {requiredApprovals: true},
    });
    expect(w.requiredApprovals).toEqual([{name:'license'}]);
  });
});
