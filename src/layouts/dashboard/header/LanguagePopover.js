import { useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, Stack, IconButton, Popover } from "@mui/material";
import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: "tm",
    label: "Turkmen",
    icon: "/assets/icons/Tm.svg",
  },
  {
    value: "ru",
    label: "Russian",
    icon: "/assets/icons/ru.svg",
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(null);
  const [language, setLanguage] = useState(i18n.language);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
    i18n.changeLanguage(language);
    setOpen(null);
  };
  return (
    <>
      <IconButton
        onClick={handleOpen}
        onMouseEnter={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <img
          style={{ width: "80%" }}
          src={LANGS.find((l) => l.value === language)?.icon}
          alt={LANGS.find((l) => l.value === language)?.label}
        />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((lang) => (
            <MenuItem
              key={lang.value}
              selected={lang.value === language}
              onClick={() => handleLanguageChange(lang.value)}
            >
              <Box
                component="img"
                alt={t(lang.label)}
                src={lang.icon}
                sx={{ width: 28, mr: 2 }}
              />

              {t(lang.label)}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}
