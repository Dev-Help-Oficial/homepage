'use client'
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const links = [
  { label: 'Início', path: '/' },
  { label: 'Discord', path: 'https://discord.gg/vNpPh6XTE9' },
  { label: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 640) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        setMobileMenuOpen(false);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    router.push(path);
    setMobileMenuOpen(false);
  };

  return (
    <AppBar position="fixed" style={{background: 'transparent'}}>
      <Toolbar>
        {isMobileView && (
          <IconButton
            edge="start"
            style={{color: '#fff'}}
            aria-label="menu"
            onClick={toggleMobileMenu}
          >
            <MenuIcon />
          </IconButton>
        )}
        {!isMobileView && (
          <div className="flex">
            {links.map((link, index) => (
              <a
                key={link.label}
                className={`text-white mr-5 ${router.asPath === link.path ? 'font-bold' : ''} hover:opacity-80 cursor-pointer`}
                onClick={(e) => {
                    e.preventDefault();
                    router.push(link.path);
                  }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        <Drawer
          anchor="right"
          open={isMobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <List>
            {links.map((link) => (
              <ListItem button key={link.label} onClick={() => handleLinkClick(link.path)}>
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;