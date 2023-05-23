import React, { useEffect, useState} from "react";
import { 
  Card,CardContent, Typography,Box, Table, TableHead, TableRow, TableCell, TableBody,
  Avatar, Backdrop, CircularProgress, IconButton, Button
} from "@material-ui/core";
import { CheckCircleTwoTone, CloseCircleFilled, LoadingOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, removeUser, updateUserVerified } from "../../reducers/usersReducer";
import axios from "axios";
// import AlignMessage from "./alignMessage";



const NewUser = () => {
  const [age,setAge] = React.useState("10");
  const {userData: {role}} = useSelector(state => state.auth);
  const {loading, users, error} = useSelector(state => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(role !== "admin") {
        navigate("/dashboard/dashboard/home", {replace: true});
    }
    dispatch(fetchUsers());
    }, [])

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return(
    <Card variant="outlined">
      <CardContent>
        <Box sx={{
          display: {
            sm: "flex",
            xs: "block",
            height: "8px",
          },
          alignItems:"flex-start"
        }}>
          <Box>
            <Typography variant="h3" sx={{marginBottom: "0", color:"blue",fontSize:"25px"}} gutterBottom>
                New Users
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
                  <TableCell><Typography>Avatar</Typography></TableCell>
                  <TableCell><Typography>Name & Email</Typography></TableCell>
                  <TableCell><Typography>Role</Typography></TableCell>
                  <TableCell><Typography>Action</Typography></TableCell>
              </TableHead>
              <TableBody>
                {
                  users.map((user, i) => <User key={user._id} i={i} user={user} />)
                }
              </TableBody>
            </Table>
            }
        </Box>
      </CardContent>
    </Card>
  )
};

const User = ({user, i}) => {
  const [settingVerified, setSettingVerified] = useState(false);
  const [deletingUser, setDeletingUser] = useState(false);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);

  const stringAv = (user) => {
    return {
      children: user.firstName.toUpperCase()[0] + user.lastName.toUpperCase()[0],
      alt: `${user.firstName} ${user.lastName}`,
      sx: {bgcolor: ['cornflowerblue', 'darkslategray', 'brown'][i % 3]}
    }
  }

  const handleVerifyUser = async () => {
    setSettingVerified(state => true);
    // request
    await axios.request({
      method: 'PATCH',
      url: `https://inventory-ciul.onrender.com/api/auth/users/${user._id}/approve`,
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }).then(res => {
      if(res.status === 200) {
        dispatch(updateUserVerified(user._id));
      }
    })
    // update store.users
    setSettingVerified(state => false);
  }

  const handleDeleteUser = async () => {
    setDeletingUser(state => true);
    // request
    await axios.delete(
      `https://inventory-ciul.onrender.com/api/auth/delete/users/${user._id}`,
      {
        headers: {
          'Authorization': 'Bearer ' + token,
        }
      }).then((res) => {
        if(res.status === 200) {
          // update store.users
          dispatch(removeUser(user._id));
        }
      })
    setDeletingUser(state => false);
  }

  return (
    <TableRow>
      <TableCell>{i + 1}</TableCell>
      <TableCell>
        {
          user.image
          ? <Avatar alt={user.firstName + ' ' + user.lastName} src={user.image} />
          : <Avatar {...stringAv(user)} />
        }
      </TableCell>
      <TableCell>
        <Box sx={{flexDirection: 'column'}}>
        <Typography >{user.firstName + ' ' + user.lastName}</Typography>
        <Typography sx={{fontSize: 12}}>{user.email}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        {user.role}
      </TableCell>
      <TableCell>
        <IconButton aria-label="Approve user" sx={{}}>
          {
            settingVerified
            ? <LoadingOutlined color="#cacaca" />
            : <CheckCircleTwoTone twoToneColor={user.isVerified ? '#52c41a' : '#cacaca'}
                onClick={handleVerifyUser}
              /> 
          }
        </IconButton>
        <IconButton aria-label="Delete user">
          {
            deletingUser
            ? <LoadingOutlined color="cacaca" />
            : <CloseCircleFilled style={{backgroundColor: '#ee2244', color: 'white', borderRadius: '50%'}}
                onClick={handleDeleteUser}
              />
          }
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default NewUser;
