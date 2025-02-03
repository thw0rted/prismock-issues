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
      include: {requiredApprovals: true, users: true},
    });
    expect(w.requiredApprovals.length).toBe(0);
    expect(w.users.length).toBe(0);
  });

  it('makes an approval, then a widget with no approvals', async () => {
    await prisma.approvalType.create({data:{name: 'license'}});
    await prisma.approvalType.create({data:{name: 'abc'}});
    await prisma.approvalType.create({data:{name: 'def'}});

    const w = await prisma.widget.create({
      data:{
        name: 'thing',
      },
      include: {requiredApprovals: true, users: true},
    });
    expect(w.requiredApprovals).not.toContainEqual(expect.objectContaining({name:'license'}));
    expect(w.requiredApprovals.length).toBe(0);
  });

  it('makes users, then makes a widget with no users', async () => {
    await prisma.user.create({data: {name: 'me', email: 'me@example.com'}});
    await prisma.user.create({data: {name: 'you', email: 'you@example.com'}});

    const w = await prisma.widget.create({
      data:{
        name: 'thing',
      },
      include: {requiredApprovals: true, users: true},
    });
    expect(w.users).not.toContainEqual(expect.objectContaining({name:'me'}));
    expect(w.users.length).toBe(0);
  });
});
