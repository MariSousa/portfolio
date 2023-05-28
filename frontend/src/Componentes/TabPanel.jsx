import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SobreMim from "./Painel Tabela/SobreMim";

import "./css/tabpanel.css";
import Experiencia from "./Painel Tabela/Experiencia";
import Educacao from "./Painel Tabela/Educacao";
import Habilidades from "./Painel Tabela/Habilidades";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabela__curriculo">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Sobre Mim" {...a11yProps(0)} />
            <Tab label="Experiência" {...a11yProps(1)} />
            <Tab label="Educação" {...a11yProps(2)} />
            <Tab label="Habilidades" {...a11yProps(3)} />
          </Tabs>
        </Box>

        {/* sobre mim */}
        <TabPanel value={value} index={0}>
          <SobreMim />
        </TabPanel>

        {/* Experiência */}
        <TabPanel value={value} index={1}>
          <Experiencia />
        </TabPanel>

        {/* Educação */}
        <TabPanel value={value} index={2}>
          <Educacao />
        </TabPanel>

        {/* Habilidade */}
        <TabPanel value={value} index={3}>
          <Habilidades />
        </TabPanel>
      </Box>
    </div>
  );
}
