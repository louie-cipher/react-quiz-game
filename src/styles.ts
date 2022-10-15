import styled from 'styled-components';

export const App = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 2em;
    font-weight: bold;
    color: #fff;
    text-align: center;
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 600px;
    text-align: center;
    background-color: #333;
    padding: 0 20px 20px;
    margin: 10px 0;
    border-radius: 10px;
    color: #fff;
    box-shadow: 0 0 10px #000;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const Points = styled.p`
    font-size: 1em;
    font-weight: bold;
    text-align: right;
    margin: 0;
    padding: 0;
`;

export const CurrentRound = styled.span`
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
`;

export const TotalRounds = styled.span`
    color: #fffa;
    font-size: 1rem;
    margin: 0;
    padding: 0;
`;

export const Question = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

export const QuestionTitle = styled.span`
    max-width: 70%;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: 500;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
`;

export const QuestionTitleBold = styled.b`
    font-size: 1.6rem;
    font-weight: 900;
    margin: 0;
    padding: 0;
`;

export const QuestionAnswers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
`;

export const QuestionAnswer = styled.button`
    width: 90%;
    padding: 1rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px #000a;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.1s;

    :hover {
        padding: 1.5rem 1rem;
        transition: all 0.1s;
    }
    :active {
        padding: 1.5rem 1rem;
        transition: all 0.1s;
    }
`;
