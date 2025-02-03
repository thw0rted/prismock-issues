import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Back to zero in case we ran this demo already
await prisma.approvalType.deleteMany({});
await prisma.user.deleteMany({});
await prisma.widget.deleteMany({});

// Make one approval type
await prisma.approvalType.create({
  data: {name: 'license'}
});


//// Make widgets and users with and without linked records
const w1 = await prisma.widget.create({
  data: {
    name: 'dashboard',
  },
  include: {requiredApprovals: true},
});
const w2 = await prisma.widget.create({
  data: {
    name: 'metrics',
    requiredApprovals: {connect: {name: 'license'}}
  },
  include: {requiredApprovals: true},
});
console.log(w1);
console.log(w2);

const u1 = await prisma.user.create({
  data:{
    name:'me',
    email: 'me@example.com',
    approverFor: {connect: {name: 'license'}}
  },
  include: {approverFor: true},
});
const u2 = await prisma.user.create({
  data:{
    name:'you',
    email: 'you@example.com',
  },
  include: {approverFor: true},
});
console.log(u1);
console.log(u2);
