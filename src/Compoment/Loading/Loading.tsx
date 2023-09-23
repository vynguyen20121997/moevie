import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";

interface MediaProps {
  loading?: boolean;
}

function Loading(props: MediaProps) {
  return (
    <Card sx={{ maxWidth: 200, m: 2 }}>
      <Skeleton sx={{ height: 270 }} animation="wave" variant="rectangular" />
    </Card>
  );
}

export default Loading;
