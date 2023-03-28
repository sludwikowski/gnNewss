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
  const getCountryName = (code: string) =>
    i18n.language === 'en'
      ? countries.find((c) => c.code === code)?.nameEn
      : countries.find((c) => c.code === code)?.name

  return (
    <Box role="presentation" sx={{ width: 200 }}>
      <List>
        {countries.map((c) => (
          <ListItem key={c.code} disablePadding>
            <ListItemButton
              onClick={() => handleCountryClick(c.code)}
              href={`/country/${c.code}`}
            >
              <ListItemText primary={getCountryName(c.code)} />
              <Flag country={c.code} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
