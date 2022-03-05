import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationCustom = props => {
    return(
        <div className='App-page' data-testid="pagination">
            <Stack spacing={2}>
                <Pagination count={props.pageCount} onChange={props.handlePageChange}/>
            </Stack>
      </div>
    )

}

export default PaginationCustom