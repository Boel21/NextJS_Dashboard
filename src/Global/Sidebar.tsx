"use client";

// Themes and Styles
import tokens from "@/themes/theme";

// React Imports
import { Dispatch, useState, SetStateAction, useEffect } from "react";

// NextJS
import Link from "next/link";
import Image from "next/image";

// Material UI - Third party Libraries and features
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

// Material UI Icons
// Main Menu Icon
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// Dashboard Icon
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
// Inventory SubMenu Icons
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import MoveDownOutlinedIcon from "@mui/icons-material/MoveDownOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

// Alert Shared icon
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";

// Mantenance SubMenu Icons
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";

//Others //TODO update this on the way
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

type MenuOptions = {
  title: string;
  to: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  icon?: React.ReactNode;
};

// Render every Menu Option in the sidebar
const Item = ({ title, to, icon, selected, setSelected }: MenuOptions) => {
  return (
    <MenuItem
      active={selected === title}
      component={<Link href={to} className="flex gap-2 flex-center" />}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

//NOTE this is to check the route and maintain the menu open when routing, if not needed could be deleted
// defaultOpen={currentPath.startsWith("/contacts")}
// active={currentPath === "/contacts/isa"}

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const handleOpenChange = (submenuId: number) => (open: boolean) => {
    if (open) {
      setOpenSubmenu(submenuId);
    } else if (openSubmenu === submenuId) {
      // Close the submenu only if it's currently open
      setOpenSubmenu(null);
    }
  };

  const isSubmenuOpen = (submenuId: number) => openSubmenu === submenuId;

  useEffect(() => {}, [openSubmenu]);

  return (
    <Box display="flex" height="100%">
      <Sidebar backgroundColor={colors.primary[400]} collapsed={isCollapsed}>
        <Menu
          menuItemStyles={{
            root: {
              [`& .ps-active`]: {
                color: "#868dfb",
              },
            },
            icon: {
              backgroundColor: "transparent",
            },
            button: {
              [`&.ps-menu-button:hover`]: {
                backgroundColor: "transparent",
                color: "#868dfb",
              },
            },
            subMenuContent: {
              backgroundColor: `${colors.blueAccent[900]}`,
            },
            SubMenuExpandIcon: {
              backgroundColor: "transparent",
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src={`/assets/user.jpg`}
                  alt="logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  El Pollo
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SubMenu
              label="Inventario"
              icon={<InventoryOutlinedIcon />}
              onOpenChange={handleOpenChange(1)}
              defaultOpen={isSubmenuOpen(1)}
            >
              <Item
                title="Tablero"
                icon={<SpeedOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Productos"
                icon={<FactCheckOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Categorías"
                to="/"
                icon={<CategoryOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Agregar Producto"
                to="/"
                icon={<AddBoxOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Ajustes"
                to="/"
                icon={<AdjustOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Imprimir Código"
                to="/"
                icon={<QrCode2OutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Lista de Empaque"
                to="/"
                icon={<Inventory2OutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Almacenes"
                to="/"
                icon={<WarehouseOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Transferir"
                to="/"
                icon={<CompareArrowsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Recepción"
                to="/"
                icon={<MoveDownOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Alertas"
                icon={<NewReleasesOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Historial"
                to="/"
                icon={<HistoryOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              label="Mantenimiento"
              icon={<EngineeringOutlinedIcon />}
              onOpenChange={handleOpenChange(2)}
              defaultOpen={isSubmenuOpen(2)}
            >
              <Item
                title="Tablero"
                icon={<SpeedOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Equipos"
                icon={<DnsOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Nuevo Equipo"
                icon={<AddBoxOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Mantenimientos"
                icon={<ConstructionOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Repuestos"
                icon={<HomeRepairServiceOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Alertas"
                icon={<NewReleasesOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Bitácora"
                icon={<PublishedWithChangesOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
