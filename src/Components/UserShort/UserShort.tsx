/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { Owner } from "../../app/interface";
/*-----------IMPORT MUI & CSS-----------*/
import { Avatar, Typography } from "@mui/material";
import { LinkDom } from "../Style/StyledComponents";
/*--------------------------------------------------------*/
interface Props {
  user: Owner;
}
export const UserShort = ({ user }: Props) => {
  return (
    <Typography display={"flex"} variant="caption" alignItems="center">
      <Avatar
        sx={{
          width: "50px",
          height: "50px",
          display: "inline",
          mx: 1,
          zIndex: 2,
          border: "1px solid",
          borderColor: "primary.dark",
          ["&:before"]: {
            zIndex: -1,
            content: "''",
            display: "block",
            backgroundColor: "primary.light",
            width: "50px",
            height: "50px",
            position: "absolute",
          },
        }}
        src={
          user?.profile_picture.length > 0
            ? user.profile_picture
            : user.avatar.length > 0
            ? user.avatar
            : user.profile_picture
        }
      />
      <LinkDom
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
        to={`/Profile/${user._id}`}
      >
        {user?.user_name}
      </LinkDom>
    </Typography>
  );
};
