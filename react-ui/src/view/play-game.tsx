import { styled } from 'styled-components';
import FlippableCard from '../components/flippable-card/flippable-card';

const PlayGame = () => {
  interface Question {
    value: number;
    answered: boolean;
    answer: string;
    question: string;
  }

  interface Category {
    title: string;
    questions: Question[];
  }

  const cardPrizes: number[] = [100, 200, 300, 400, 500];

  const categories: string[] = ['one', 'two', 'three', 'four', 'five', 'six'];

  function gameBoard(prizeValues: number[], categories: string[]) {
    const game_board = [];

    for (let i = 0; i < categories.length; i++) {
      const category: Category = {
        title: categories[i],
        questions: [],
      };

      for (let j = 0; j < prizeValues.length; j++) {
        const question: Question = {
          value: prizeValues[j],
          answered: false,
          answer: 'Answer',
          question: 'Question',
        };
        category.questions.push(question);
      }

      game_board.push(category);
    }

    return game_board;
  }

  const game_data = gameBoard(cardPrizes, categories);

  const game_board =
    game_data &&
    game_data.length &&
    game_data.map((item) => {
      const values = item.questions.map((card) => {
        return <FlippableCard question={card.question} prize={card.value} />;
      });
      return (
        <Column>
          <TitleContainer>
            <CategoryTitle>{item.title}</CategoryTitle>
          </TitleContainer>
          <Column>{values}</Column>
        </Column>
      );
    });

  return <RowBoard>{game_board}</RowBoard>;
};

export default PlayGame;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: sans-serif;
`;

const RowBoard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 30px;
  background: #169bfc;
  display: grid;
  
`;

const CategoryTitle = styled.span`
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  place-self: center;
`;
