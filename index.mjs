import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const original = await prisma.fooInt.create({data: {name: 'abc'}});
console.log('original', original);

const good = await prisma.fooInt.update({
  where: {id: original.id},
  data: {name: 'def'}
})
console.log('good', good);

// Should throw because we don't have a record with this name
const bad = await prisma.fooInt.update({
  where: {id: 9999},
  data: {name: 'ghi'}
})
console.log('bad', bad);
