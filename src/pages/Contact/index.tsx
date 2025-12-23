import {
  Alert,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import { useForm } from "react-hook-form";
import { useState } from "react";

import BrandButton from "@/components/ui/BrandButton";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SEOHead from "@/components/ui/SEOHead";
import { brandIdentity } from "@/data/brand";
import { pageMeta } from "@/data/meta";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const meta = pageMeta.contact;
  const { register, handleSubmit, reset } = useForm<ContactFormValues>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (values: ContactFormValues) => {
    console.table(values);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <SEOHead meta={meta} />

      <SectionWrapper>
        <SectionHeading
          eyebrow="Visit us"
          title="Showroom & workshop"
          subtitle={brandIdentity.location}
        />
      </SectionWrapper>

      <SectionWrapper background="muted">
        <Box className="grid gap-8 lg:grid-cols-2">
          <Box
            sx={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              component="iframe"
              title="NG Jewellers location"
              src={brandIdentity.mapEmbedUrl}
              width="100%"
              height="400"
              loading="lazy"
              allowFullScreen
              sx={{
                border: 0,
                display: "block",
                margin: 0,
                padding: 0,
                width: "100%",
                flex: 1,
                minHeight: 0,
              }}
            />
          </Box>
          <Box>
            <List>
              <ListItem disableGutters>
                <ListItemIcon>
                  <CallIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Reach us"
                  secondary={brandIdentity.phones.join(" | ")}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <AccessTimeIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Working hours"
                  secondary={brandIdentity.hours}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <PlaceIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Address"
                  secondary={brandIdentity.location}
                />
              </ListItem>
            </List>
            <Typography variant="body2" color="text.secondary">
              Walk-ins are welcome, but appointments ensure a dedicated
              consultant and private viewing lounge.
            </Typography>
          </Box>
        </Box>
      </SectionWrapper>

      {/* <SectionWrapper>
        <SectionHeading
          eyebrow="Enquire"
          title="Send an inquiry"
          align="center"
        />
        <Box
          component="form"
          className="glass-panel p-6 space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {submitted && (
            <Alert severity="success">
              Thank you! Our concierge will get back shortly.
            </Alert>
          )}
          <Box className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Full name"
              fullWidth
              {...register("name", { required: true })}
            />
            <TextField
              label="Phone"
              fullWidth
              {...register("phone", { required: true })}
            />
            <TextField label="Email" fullWidth {...register("email")} />
            <TextField
              label="How can we help?"
              fullWidth
              multiline
              minRows={4}
              {...register("message", { required: true })}
              className="md:col-span-2"
            />
          </Box>
          <BrandButton type="submit" size="large">
            Submit inquiry
          </BrandButton>
        </Box>
      </SectionWrapper> */}
    </>
  );
};

export default ContactPage;
