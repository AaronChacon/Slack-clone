import React from 'react';
import { useDispatch } from 'react-redux';
import styled  from 'styled-components';
import Swal from 'sweetalert2'
import { enterRoom } from '../features/appSlice';
import { db } from '../firebase';


const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px; 
    }

`;

const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;

`;




export const SidebarOption = ({ Icon, addChannelOption, title, id }) => {

    const dispatch = useDispatch();

    
    const addChannel = () => {

        Swal.fire({
            title: 'Please, enter the channel name',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Save',
            showLoaderOnConfirm: true,

        }).then((result) => {

            if (result.isConfirmed) {
                
                const channelName = result.value;

                db.collection('rooms').add({
                    name: channelName,
                })

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                  
                Toast.fire({
                icon: 'success',
                title: `Channel created - "${channelName}"`
                })

            }

        })
        

    };
    
    const selecteChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id,
            }))
        }
    };



    return (
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel: selecteChannel}
        >
            {Icon && <Icon fontSize='small'  style={{  padding: 10 }}  /> }

            { 
                Icon 
                ?    
                ( 
                    <h3>{title}</h3>
                )
                :
                ( 
                    <SidebarOptionChannel>
                        <span>#</span> {title}
                    </SidebarOptionChannel> 
                )
            }
            
        </SidebarOptionContainer>
    )
}
