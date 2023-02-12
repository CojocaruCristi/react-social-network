import React, {useEffect, useState} from 'react';
import {Typography} from "@material-ui/core";
import Skeleton from '@mui/material/Skeleton';


const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [statusValue, setStatusValue] = useState('')


    useEffect(() => {
        if(props?.status) {
            setStatusValue(props.status);
        }
    }, [props?.status])


    const activateEditMode = () => {
        if(props.routeMatch.params.userId === 'me'){
            setEditMode(true);
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        if(statusValue && statusValue !== props.status) {
            props.updateProfileStatusThunkCreator(statusValue);
        }else {
            setStatusValue(props.status);
        }
    }

    const onStatusChange = (value) => {
        setStatusValue(value);
    }

    return (
        <div>
            {
                props.isStatusLoading ? (
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    )
                    :
                    (
                        <Typography >About Me: {
                            editMode ? (
                                <input autoFocus onBlur={deactivateEditMode} onChange={(event) => onStatusChange(event.target.value)} value={statusValue} />
                            ) : (
                                <span onDoubleClick={activateEditMode} >{statusValue}</span>
                            )
                        }</Typography>
                    )
            }

        </div>
    )
}

export default ProfileStatus;