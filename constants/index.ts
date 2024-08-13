import BookIcon from '@/components/Icons/BookIcon';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


export const liveBookStatus = "Live Book Status";
export const listOfOwner = "List of Owners";
export const listOfBooks = "List of Books";

export const ownerDashboardTableHead = ["No.", "Book No.", "Book Name", "Status", "Price", "Action"]
export const adminDashboardTableHead = ["No.", "Book no.", "Owner", "Status", "Price"]
export const listOfOwnersTableHead = ["No.", "Owner", "Upload", "Location", "Status", "Action", " "]
export const listOfBooksableHead = ["No.", "Author", "Owner", "Category", "Book Name", "Status"]



export interface Route {
  text: string;
  icon: React.ComponentType<any>;
  href: string;
};

export const adminRoutes = [
  {
    text: 'Dashboard',
    icon: DashboardOutlinedIcon,
    href: '/admin/dashboard'
  },
  {
    text: 'Books',
    icon: BookIcon,
    href: '/admin/books'
  },
  {
    text: 'Owners',
    icon: PersonOutlineOutlinedIcon,
    href: '/admin/owners'
  },
  {
    text: 'Other',
    icon: AddBoxIcon,
    href: '#'
  },
  {
    text: 'Other',
    icon: AddBoxIcon,
    href: '#'
  },
]
