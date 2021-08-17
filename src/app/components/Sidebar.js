import React from 'react';
import styled  from 'styled-components';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';


const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid var(--slack-light-color);
    max-width: 260px;
    margin-top: 60px;

`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid var(--slack-light-color);
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: var(--slack-light-color);
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }

`;

const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
`;

export const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Frontend HQ</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Aaron chacon
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
        </SidebarContainer>
    )
}
