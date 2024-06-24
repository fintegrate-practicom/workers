import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';

export default function CheckboxLabels() {



    return (
        <>
            <Box>Select preferred email types</Box>
            <FormGroup sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'row' }}>

                <Box sx={{ display: 'flex', flexWrap: 'wrap' }} >
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Recruitment Notification" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send CV Receipt Notification" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Interview Confirmation" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Recruitment Status Update" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Task Assignment" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Task Status Update" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Approval Request" />
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Feedback To Employee" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send New Course Notification" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Training Invitation" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Training Status Update" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Attendance Report Update" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Salary Calculation Update" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="send Payment Transfer Confirmation" />
                </Box>

            </FormGroup>
        </>
    );
}
