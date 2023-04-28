import { useState } from "react";
import { useDispatch } from 'react-redux';
import EditCategoria from "./EditCategoria";
import Swal from 'sweetalert2'
import { Button, ListItemText, Switch, Stack} from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";





const ListaCategorias = ({ id, nombre, isActive }) => {

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch()

  const deleteCategoria = (id) =>{
    Swal.fire({
      title: `Esta seguro que quiere eliminar la categoria : "${nombre}" ?`,
      showCancelButton: true,
      confirmButtonColor: '#F8BBD0',
      cancelButtonColor: '#c82719',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(DeleteCategorias({id}));
        setAnchorEl(null);
      }
    })
  }

  return (
    <>
        {/* <ListItemText primary={nombre} /> */}

        <Stack flexDirection='row'>
          <Switch       />

        <Button onClick={() => setModal(true)}><EditIcon /></Button>
        {/* <EditCategoria modal={modal} setModal={setModal} id={id} /> */}

        {/* <Button onClick={() => deleteCategoria(id)}><DeleteIcon /></Button> */}

        </Stack>

    </>
  );
};

export default ListaCategorias;
