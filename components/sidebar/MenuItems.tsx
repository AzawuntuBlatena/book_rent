"use client";
import { adminRoutes, Route } from "@/constants";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function MenuItems() {
  const pathname = usePathname();
  let IconComponent = null
  const routes: Route[] = []

  return (
    <List>
      {adminRoutes.map((item: Route) => {
        IconComponent = item.icon;
        console.log(IconComponent)
        return <ListItem
          key={item.text}
          component={Link}
          href={item.href}
          sx={{
            backgroundColor: item.href === pathname ? '#0088cc' : 'transparent',
            '&:hover': {
              backgroundColor: item.href === pathname ? '#0088cc' : 'rgba(255, 255, 255, 0.08)',
            },
            borderRadius: '4px',
            mx: 1,
            my: 0.5,
          }}
        >
          <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      })
      }
    </List>
  )
}
