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
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export const Loading = () => {
  return (
    <Card sx={{ marginTop: 30, maxWidth: 2000, m: 2 }}>
      <Skeleton sx={{ height: 260 }} animation="wave" variant="rectangular" />
    </Card>
  );
};

export default function HeroSliderLoading() {
  return (
    <Card sx={{ maxWidth: 2000, marginTop: 30, m: 2 }}>
      <Skeleton variant="rectangular" width={2000} height={700} />
    </Card>
  );
}
