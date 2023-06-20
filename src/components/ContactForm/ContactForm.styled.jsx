import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  border: solid #cccccc;
  // margin-top: 100px;
`;

export const LabelStyled = styled.label`
  display: contents;
  margin: 0;
  font-size: 18px;
`;

export const InputStyled = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  font-size: 12px;
`;

export const BtnStyled = styled.button`
  display: inline-block;
  padding: 5px;
  margin: 30px 20px;
  font-size: 16px;
  background-color: lightgrey;
  border-radius: 15px;

  &:hover {
    background-color: #93a7df;
    border-color: #a2a4a7;
    color: #ffffff;
  }
`;

export const TitleStyled = styled.h1`
  margin: 40px;
  font-size: 40px;
`;

export const SubtitleStyled = styled.h2`
  margin: 40px auto 0;
  font-size: 24px;
`;

export const CaptionFStyled = styled.h3`
  margin: 20px auto;
  font-size: 18px;
  font-weight: 400;
`;
