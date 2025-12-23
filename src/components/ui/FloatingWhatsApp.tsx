import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fab, Tooltip } from "@mui/material";
import { brandIdentity } from "@/data/brand";

const FloatingWhatsApp = () => {
  const phone = brandIdentity.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent("Hi! I need assistance.");
  return (
    <Tooltip title="Chat on WhatsApp" placement="left">
      <Fab
        component="a"
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        color="success"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          backgroundColor: "#25D366",
          color: "#fff",
          boxShadow: "0 12px 25px rgba(37, 211, 102, 0.45)",
          "&:hover": {
            backgroundColor: "#1da851",
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
  );
};

export default FloatingWhatsApp;
