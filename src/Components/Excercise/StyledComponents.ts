/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { styled } from "@mui/system";
import { Box, Typography, Paper } from "@mui/material";
/*--------------------------------------------------------*/
export const BoxExcerciceContainer = styled(Box)`
  padding: 1vh;
  width: 50vw;
`;

export const StyledTypography = styled(Typography)(
  ({ theme }) => `
    font-family: helvetica;
    color:  ${theme.palette.getContrastText(theme.palette.background.default)};
    font-size: 5vh;
    font-weight: bold;
    text-transform: uppercase;
  `
);

export const SuccessTypography = styled(Typography)(
  ({ theme }) => `
    font-family: helvetica;
    color:  ${theme.palette.success.main};
    font-size: 5vh;
    font-weight: bold;
    text-transform: uppercase;
  `
);

export const FailedTypography = styled(Typography)(
  ({ theme }) => `
    font-family: helvetica;
    color:  ${theme.palette.error.main};
    font-size: 5vh;
    font-weight: bold;
    text-transform: uppercase;
  `
);

export const CreatorNameText = styled(Typography)(
  ({ theme }) => `
  font-family: helvetica;
  color:  ${theme.palette.getContrastText(theme.palette.background.default)};
  font-size: 2.2vh;
  font-weight: bold;
`
);

export const CreatedAt = styled(Typography)(
  ({ theme }) => `
  font-family: helvetica;
  color:  ${theme.palette.getContrastText(theme.palette.background.default)};
  font-size: 1.6vh;
  font-weight: bold;
`
);

export const StyledPaper = styled(Paper)`
  font-family: helvetica;
  font-size: 2.5vh;
  padding: 1.5vh;
  height: 50vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 1vw;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(39, 37, 37);
  }
`;
