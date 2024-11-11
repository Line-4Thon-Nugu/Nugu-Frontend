import * as S from "./styled";
import rank1 from "/images/rank1.svg";
import rank2 from "/images/rank2.svg";
import rank3 from "/images/rank3.svg";
import basisrank from "/images/basisrank.svg";
export const NuguTestRanking = ({ ranking }) => {
  const getRankImage = (rank) => {
    if (rank === 1) return rank1;
    if (rank === 2) return rank2;
    if (rank === 3) return rank3;
    return basisrank;
  };
  return (
    <>
      {ranking.map((user, index) => (
        <S.Wrapper key={index}>
          <S.Rank>{index + 1}</S.Rank>
          <S.RankImg src={getRankImage(index + 1)} />
          <S.NickName>{user.nickname}</S.NickName>
          <S.MyRank>
            {user.rank}/{user.totalParticipants}
          </S.MyRank>
        </S.Wrapper>
      ))}
    </>
  );
};