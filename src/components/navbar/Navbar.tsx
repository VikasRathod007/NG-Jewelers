import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";

import { highlightNav, primaryNav } from "@/data/navigation";
import BrandButton from "@/components/ui/BrandButton";
import logoImage from "@/assets/images/NG_logo.png";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const allNavItems = useMemo(() => [...primaryNav, ...highlightNav], []);

  const isActive = (path: string) =>
    location.pathname === path || location.hash === path.replace("/", "");

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(253, 251, 248, 0.9)",
        }}
      >
        <Toolbar
          sx={{
            gap: { xs: 1, sm: 2, md: 3 },
            px: { xs: 1, sm: 2, md: 3 },
            py: { xs: 0.5, sm: 0.75, md: 1 },
            minHeight: { xs: 56, sm: 64, md: 72, lg: 80 },
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 1.5, md: 2 },
              minWidth: 0, // Prevent overflow
            }}
          >
            {/* NG Jewellers Logo */}
            <Box
              component="img"
              src={logoImage}
              alt="NG Jewellers Logo"
              sx={{
                width: { xs: 44, sm: 52, md: 60, lg: 68 },
                height: { xs: 44, sm: 52, md: 60, lg: 68 },
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                variant="h5"
                fontFamily='"Playfair Display", serif'
                sx={{
                  lineHeight: 1.2,
                  fontSize: {
                    xs: "1.25rem",
                    sm: "1.5rem",
                    md: "1.75rem",
                    lg: "2rem",
                  },
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "#D4AF37",
                }}
              >
                NG Jewellers
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.85rem" },
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {/* {brandIdentity.location} */}
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation - hidden on mobile */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {primaryNav.map((item) => (
              <Typography
                key={item.path}
                component={Link}
                to={item.path}
                className="text-sm font-medium"
                sx={{
                  color: isActive(item.path) ? "primary.main" : "text.primary",
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Mobile Menu Button - only visible on mobile */}
          <IconButton
            edge="end"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", lg: "none" } }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 320 }} role="presentation">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={2}
            py={2}
          >
            <Typography variant="h6">Explore NG Jewellers</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {allNavItems.map((item) => (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                selected={isActive(item.path)}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Box px={2} pb={4}>
            <BrandButton
              fullWidth
              component={Link}
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Contact Studio
            </BrandButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
