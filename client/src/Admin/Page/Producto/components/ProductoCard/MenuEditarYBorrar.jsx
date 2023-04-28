import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Swal from 'sweetalert2'

import { styled, alpha } from '@mui/material/styles';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));






const MenuEditarYBorrar = () => {

  // const {codigo, nombre, descripcion, precio, imagen, fechaPublicacion, oferta} = p

  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  
  // const handleEdit = () => {
  //   setAnchorEl(null);
  //   // dispatch()
  // }
  
  // const handleDelete = () => {

  //   setAnchorEl(null);

  //   Swal.fire({
  //     title: `Esta seguro que quiere eliminar el producto : "${nombre}" ?`,
  //     showCancelButton: true,
  //     confirmButtonColor: '#F8BBD0',
  //     cancelButtonColor: '#c82719',
  //     confirmButtonText: 'Si'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       dispatch(DeleteProducto({codigo}));
  //     }
  //   })
  // }

  return (
    <>
      <IconButton
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        onClick={handleClick}
      ><MenuIcon />
      </IconButton>

      <StyledMenu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}
      >
        {/* <MenuItem onClick={handleEdit} disableRipple><EditIcon />Editar</MenuItem>
        <MenuItem onClick={() => handleDelete(codigo)} disableRipple><DeleteIcon />Borrar</MenuItem> */}
      </StyledMenu>
    </>
  );
}

export default MenuEditarYBorrar;