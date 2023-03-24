import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import Flag from 'react-flagkit'

import { SideMenuListProps } from '../typings'
export default function SideMenuList({
  countries,
  handleCountryClick,
  i18n,
}: SideMenuListProps) {
  return (
    <Box role="presentation" sx={{ width: 200 }}>
      <List>
        {countries.map((c) => (
          <ListItem key={c.code} disablePadding>
            <ListItemButton
              onClick={() => handleCountryClick(c.code)}
              href={`/country/${c.code}`}
            >
              <ListItemText
                primary={i18n.language === 'en' ? c.nameEn : c.name}
              />
              <Flag country={c.code} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
