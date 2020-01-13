import styled from "styled-components";

export const Container = styled.div`

`;


export const JjGymList = styled.ul`
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 20px;
`;

export const JjGym = styled.li`
    display: flex;
    flex-direction: column;

    header {
        width: 100%;
        height: 120px;
        background-size: cover;

        border-radius: 4px;
    }

    strong {
        margin-top: 10px;
        font-size: 24px;
        color: #444;
    }

    span {
        font-size: 15px;
        color: #999;
    }
`;
