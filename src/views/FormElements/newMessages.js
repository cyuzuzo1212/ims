import React, { useEffect, useState} from "react";
import { Card,CardContent, Typography,Box ,Table, TableHead, TableRow, TableCell, TableBody,
    Avatar, Backdrop, CircularProgress, IconButton, Button} from "@material-ui/core";
    import { CheckCircleTwoTone, CloseCircleFilled, LoadingOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, removeMessage } from "../../reducers/messagesReducer";
import { render } from "@testing-library/react";
import axios from "axios";



const NewMessages = () => {
    const [age,setAge] = React.useState("10");
    const {userData: {role}} = useSelector(state => state.auth);
    const {loading, messages, error} = useSelector(state => state.messages);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      if(role !== "admin") {
        navigate("/dashboard/dashboard/home", {replace: true});
      } else {
        dispatch(fetchMessages())
      }
    }, [])
    
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <Card variant="outlined">
            <CardContent>
                <Box sx={{display: {
                    sm: "flex",
                    xs: "block",
                    height: "8px",
                },
                alignItems:"flex-start"
                }}>
                    <Box>
                        <Typography variant="h3" sx={{marginBottom: "0", color:"blue",fontSize:"25px"}} gutterBottom>
                            New Messages

                        </Typography>
                    </Box>
                    <Box sx={{
                              marginLeft: "auto",
                              mt: {
                                    lg: 0,
                                    xs: 2,
                                   },
            }}>

                    </Box>

                </Box>

                <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}>
          {
            loading
            ? <Backdrop
                sx={{ color: '#fff', zIndex: 99}}
                open={loading}
                >
                <CircularProgress color="inherit" />
              </Backdrop>
            : 
            <Table>
              <TableHead>
                  <TableCell><Typography>N</Typography></TableCell>
                  <TableCell><Typography>Email/Name</Typography></TableCell>
                  <TableCell><Typography>Messages</Typography></TableCell>
                  <TableCell><Typography>Action</Typography></TableCell>
              </TableHead>
              <TableBody>
                {
                  messages?.map((message, i) => <Message key={message._id} i={i} message={message} />)
                }
              </TableBody>
            </Table>
            }
        </Box>
                <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >

         
        </Box>
            </CardContent>
        </Card>
    )
};

const Message = ({message, i}) => {
    const [deletingMessage, setDeletingMessage] = useState(false);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);

  const stringAv = (message) => {
    return {
        children: message.firstName.toUpperCase()[0] + message.lastName.toUpperCase()[0],
        alt: `${message.firstName} ${message.lastName}`,
        sx: {bgcolor: ['cornflowerblue', 'darkslategray', 'brown'][i % 3]}
      }
  }
  const handleDeleteMessage = async (id) => {
    setDeletingMessage(true)
    const response = await axios.delete(
      `https://inventory-ciul.onrender.com/api/message/delete/${id}`,
      {headers: {Authorization: 'Bearer ' + token}}
    )
    
    setDeletingMessage(false)
    console.log({response})
    if(response.status === 200) {
      dispatch(removeMessage(id))
    }
  }

  return (
    <TableRow>
      <TableCell>{i + 1}</TableCell>
      <TableCell>
        <Box sx={{flexDirection: 'column'}}>
          <Typography>{message.names}</Typography>
          <Typography>{message.email}</Typography>
        </Box>
      </TableCell>
      <TableCell>{message.message}</TableCell>
      <TableCell>
        <IconButton aria-label="Delete user">
          {
            deletingMessage
            ? <LoadingOutlined color="cacaca" />
            : <CloseCircleFilled style={{backgroundColor: '#ee2244', color: 'white', borderRadius: '50%'}}
                onClick={() => handleDeleteMessage(message._id)}
              />
          }
        </IconButton>
      </TableCell>
    </TableRow>
  )

}

export default NewMessages;