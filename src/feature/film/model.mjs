import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

// 여러 개 조회할 때는 pagination 기능을 넣는다.
export const filmFindMany = async (pageState, pageEnd) => {
  return prisma.film.findMany({
    skip: pageState,
    take: pageEnd,
  });
};
export const filmFindOne = async (film_id) => {
  return prisma.film.findUnique({
    where: {
      film_id: film_id, // 객체를 편하게 작성하기 위한 단축 문법
    },
  });
};

// prisma에서 select쿼리를 하는 방식
// findMany, findOne, findFirst
