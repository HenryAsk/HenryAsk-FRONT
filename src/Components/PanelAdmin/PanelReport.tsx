import React from 'react';
import ReadMoreModal from './ReadMoreModal';
/*-----------IMPORT MUI & CSS-----------*/
import {Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow , TablePagination , Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import {LinkDom} from '../Style/StyledComponents';
import { Box } from '@mui/system';
import { TituloVerMas , ButtonVerMas, SpanVerMas} from '../Style/StyledComponents';
import Avatar from '@mui/material/Avatar';



interface Column {
  id: 'name' | 'post' | 'description' | 'status' ;
  label: string;
  minWidth?: number;
  align?: 'center' | 'left';
}

const columns: readonly Column[] = [
  {
    id: 'status',
    label: 'Estado',
    minWidth: 50,
    align: 'left',
  },
  { id: 'name', label: 'Usuario', minWidth: 50, align:'center' },
  { id: 'post', label: 'Post reportado', minWidth: 100, align:'center' },
  {
    id: 'description',
    label: 'Descripcion del report',
    minWidth: 120,
    align: 'center',
  },
];

/* interface Data {
  name: string;
  post: string;
  description: string;
  status:string;
}

function createData(
  name: string,
  post: string,
  description: string,
  status:string
): Data {
  return { name, post, description, status};
} */

/* const rows = [
  createData('India', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('China', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Italy', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('United', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Canada', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Australia', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Germany', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Ireland', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Mexico', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Japan', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('France', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('United', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Russia', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Nigeria', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Brazil', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
]; */

export default function PanelReport(props:any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  let [infoModal , setInfoModal] = React.useState({});

  const handleClickOpen = (val:any) => {
    setOpen(true);
    setInfoModal(infoModal={val})
  };

  const {rows} = props;
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <ReadMoreModal open={open} setOpen={setOpen} infoModal={infoModal}/>
      <TableContainer sx={{ maxHeight: 1540 , minHeight:1540}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) =>  {
                if(column.label==='Estado'){
                  return (
                    <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth:'10%' , fontWeight:"bold",  margin:0 , padding:'0px 0px 0px 8px'}}
                >
                  {column.label}
                </TableCell>
                  )
                }
                if(column.label==='Usuario'){
                  return (
                    <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth:'10%' , fontWeight:"bold",  margin:0 , padding:'0px 0px 0px 0px'}}
                >
                  {column.label}
                </TableCell>
                  )
                }
                if(column.label==='Post reportado'){
                  return (
                    <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth:'10%' , fontWeight:"bold",  margin:0 , padding:'0px 0px 0px 10px'}}
                >
                  {column.label}
                </TableCell>
                  )
                }
                return (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , fontWeight:"bold",}}
                >
                  {column.label}
                </TableCell>
              )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row:any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      if(column.id === "name"){
                        return (
                          <TableCell align={column.align} sx={{padding:0 , margin:0 , width:"12%"}}>
                            <Box
                              display="flex"
                              alignItems="center"
                              sx={{ flexDirection: "column"}}
                            >
                              <Avatar
                                alt={row.owner.user_name}
                                src="https://thumbs.dreamstime.com/b/hombre-de-avatar-en-gris-hombres-abstractos-del-la-muestra-perfil-masculino-icono-s%C3%ADmbolo-blanco-fondo-c%C3%ADrculo-ilustraci%C3%B3n-144168114.jpg"
                              />
                              <Typography variant="subtitle2" sx={{color:"secondary.main",}}>
                                <LinkDom to={`#`} color="secondary.main" >{row.owner.user_name}</LinkDom>
                              </Typography>
                            </Box>
                          </TableCell>
                        )
                      }
                      if(column.id === "post"){
                        
                        if(row.post._id){
                          return(
                            <TableCell align={column.align} sx={{padding:"0px 0px 0px 10px" , margin:"0px" , width:"19%",}}>
                            Ir al Posteo
                          </TableCell>
                          )
                        }
                        if(row.answer._id){
                          return(
                            <TableCell align={column.align} sx={{padding:"0px 0px 0px 10px" , margin:"0px" , width:"19%",}}>
                            Ir a la respuesta
                          </TableCell>
                          )
                        }
                        if(row.comment.owner){
                          return(
                            <TableCell align={column.align} sx={{padding:"0px 0px 0px 10px" , margin:"0px" , width:"19%",}}>
                            Ir al comentario
                          </TableCell>
                          )
                        }}


                        if(column.id === 'status'){
                          if(row.status === 'FULFILLED'){
                            return (
                              <TableCell>
                                <Box textAlign={column.align} sx={{boxShadow:'1px 1px 8px #00CC66', width:'10px' , height:95 , backgroundColor:'success.main'}}>
                            </Box>
                              </TableCell>
                              
                            )
                          }
                          if(row.status === 'PENDING'){
                            return (
                              <TableCell> 
                                <Box textAlign={column.align} sx={{boxShadow:'1px 1px 8px #ef6c00' , width:'10px', height:95 , backgroundColor:'warning.main'}}>
                            </Box>
                              </TableCell>
                              
                            )
                          }
                          if(row.status === 'REJECTED'){
                            return (
                              <TableCell>
                                <Box textAlign={column.align} sx={{boxShadow:'1px 1px 8px #A10702', width:'10px', height:95, backgroundColor:'error.main'}}>
                                </Box>
                              </TableCell>
                              
                            )
                          }
                        }
                        let aux = value.split(" ");
                        let aux2 = aux.slice(0,28);
                        let aux3 = aux2.join(" ")
                        
                        return (
                          <TableCell align={column.align} sx={{maxWidth:"20vw"}}>
                            <Box>
                            {aux.length>=28?<ButtonVerMas onClick={(e:any)=>handleClickOpen(row)} sx={{color:'inherit'}}>{aux3}<TituloVerMas><SpanVerMas sx={{color:'primary.main'}}>Ver mas</SpanVerMas></TituloVerMas></ButtonVerMas>: value}
                            
                            </Box>
                          </TableCell>
                        )
                      
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}